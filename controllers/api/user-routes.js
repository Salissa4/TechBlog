const router = require('express').Router();
const {
    User,
    Post,
    Comment
} = require('../../models');

// Route to get all users
router.get('/', (req, res) => {
    User.findAll({
            attributes: {
                exclude: ['password']
            }
        })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// Route to get user by ID
router.get('/:id', (req, res) => {
  User.findOne({
          attributes: {
              exclude: ['password']
          },
          where: {
              id: req.params.id
          },
          include: [{
                  model: Post,
                  attributes: ['id', 'title', 'content', 'created_at']
              },
              {
                  model: Comment,
                  attributes: ['id', 'comment_text', 'created_at'],
                  include: {
                      model: Post,
                      attributes: ['title']
                  }
              }
          ]
      })
      .then(dbUserData => {
          if (!dbUserData) {
              res.status(404).json({
                  message: 'No user found with this id'
              });
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

// Route to create an user
router.post('/', (req, res) => {
  User.create({
          username: req.body.username,
          password: req.body.password
      })
      .then(dbUserData => {
          req.session.save(() => {
              req.session.user_id = dbUserData.id;
              req.session.username = dbUserData.username;
              req.session.loggedIn = true;

              res.json(dbUserData);
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
})


// Route to login user 
router.post('/login', (req, res) => {
  User.findOne({
          where: {
              username: req.body.username
          }
      })
      .then(dbUserData => {
          if (!dbUserData) {
              res.status(400).json({
                  message: 'No user with that username!'
              });
              return;
          }

          req.session.save(() => {
              req.session.user_id = dbUserData.id;
              req.session.username = dbUserData.username;
              req.session.loggedIn = true;

              res.json({
                  user: dbUserData,
                  message: 'You are now logged in!'
              });
          });

          const validPassword = dbUserData.checkPassword(req.body.password);

          if (!validPassword) {
              res.status(400).json({
                  message: 'Incorrect password!'
              });
              return;
          }

          req.session.save(() => {
              req.session.user_id = dbUserData.id;
              req.session.username = dbUserData.username;
              req.session.loggedIn = true;

              res.json({
                  user: dbUserData,
                  message: 'You are now logged in!'
              });
          });
      });
});

// Route to destroy session and log out user
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  } else {
      res.status(404).end();
  }

});

module.exports = router;