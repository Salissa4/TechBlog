

const { Post } = require('../models');

const postData = [
    {
        title: "Taskmaster goes public!",
        post_content: "Task-tracker app that will allow you to organize your personal to-do list items.",
        user_id: 3
    },
    {
        title: "Foster Mother Daughter Relationship App",
        post_content: "Mother daughter relationship building has launched app to foster those relationships",
        user_id: 1
    },
    {
        title: "Schedule your workday!",
        post_content: "Calendar app has just launched to schedule all your to dos for the day",
        user_id: 2

    },
    {
        title: "Tech Blog Launch",
        post_content: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
        user_id: 5
    },
    {
        title: "Apple OS Update",
        post_content: "Apple's newest OS update release date January 7, 2023",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;