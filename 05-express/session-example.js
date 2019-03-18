/**
 * create an express application
 *
 * 1 - represents a server
 * 2 - server is listening on port
 * 3 - for each request return response
 */

const express = require('express');
const session = require('express-session')
var cookieSession = require('cookie-session')

const app = express();

app.use(session({
    // store: 
    secret: 'hello world'
}));


// app.use(cookieSession({
//     name: 'session',
//     keys: ['stam secret key'],

//     // Cookie Options
//     maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }))

app.get('/', function (req, res, next) {
    // {}
    req.session.message = 'hello';
    res.send('saved to session');
});

app.get('/about', function (req, res, next) {
    res.send(req.session.message);
})

app.listen(3000, function () {
    console.log('this will be printed when we are listening to port 3000');
})
