const { User } = require('../models');

const userData = [
    {
        username: "sam",
        password: "123456"
    },
    {
        username: "lenox",
        password: "234567"
    },
    {
        username: "chad",
        password: "345678"
    },
    {
        username: "kim",
        password: "456789"
    },
    {
        username: "stephanie",
        password: "567890"
    },
    {
        username: "nelson",
        password: "112345"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;