/**
 * attach our first middleware
 * middleware should send response with hello world
 */

const express = require('express');

const app = express();

/**
 * req - Object that represents the request we got
 * res - Object represents the response we are going to send
 * next - next
 */
// /user/dashboard/hello
// /
app.get('/user', function (req, res, next) {
    // res.send('hello world');
    // res.send({ hello: 'world' }); // 
    res.json({ hello: 'world' })
    // res.sendFile()
})

app.get(/user$/, function (req, res, next) {
    res.send('you entered a number in the url')
});

app.get(['/dashboard', /^admin/], function (req, res) {
    res.status(401).send('unauthorized');
})

app.get('/user/:pk/:id/:hello', function (req, res, next) {
    res.send(`the user typed in the url: ${req.params.pk}`);

    req.message = 'hello world';
});

// middleware function

app.get('/about', function (req, res, next) {
    // next('route');

    //next(new Error())

    // throw new Error('asdfasdf');

    setTimeout(function () {
        // throw new Error();

        next(new Error('dsfgds'));
    }, 100);
}, function (req, res, next) {
    next()
})


// app.get('/about', [
//     // function(req, res, next) { ...},
//     // function(req, res, next) { ...}
//     // function(req, res, next) { ...}
// ])

// app.get('/about', [
//     // function(req, res, next) { ...},
//     // function(req, res, next) { ...}
//     // function(req, res, next) { ...}
// ], function(req, res, next) {})

// app.get()....

app.listen(3000, function () {
    console.log('this will be printed when we are listening to port 3000');
})
