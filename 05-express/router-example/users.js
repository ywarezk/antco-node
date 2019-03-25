

const express = require('express');

const userRouter = express.Router();

// /users
userRouter.get('', function (req, res, next) {
    res.send('users page')
});

// /users/:id
userRouter.get('/:id', function (req, res, next) {
    res.send(`single user ${req.params.id}`)
});

module.exports = userRouter;