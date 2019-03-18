/**
 * middleware creator
 * 
 * function(args) => function(req, res, next) {}
 * 
 * 
 */

const express = require('express');

const app = express();

// Closure
function messageCreator(msg) {
    return function (req, res, next) {
        res.send(msg + req.params.id);
    }
}

app.get('/:id', messageCreator('message in the root'));

app.get('/about/:id', messageCreator('message in the about page'));

app.listen(3000, function () {
    console.log('this will be printed when we are listening to port 3000');
})
