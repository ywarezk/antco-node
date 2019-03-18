/**
 * create an express application
 *
 * 1 - represents a server
 * 2 - server is listening on port
 * 3 - for each request return response
 */

const express = require('express');

const app = express();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(session({
    // store: 
    secret: 'hello world'
}));

app.use(bodyParser.urlencoded());

app.use(passport.initialize());
app.use(passport.session());

/**
 * what will be saved in the session
 * we need only the pk
 */
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

/**
 * having the session data how to grab the user object
 * usually we grab the user from the database
 */
passport.deserializeUser(function (id, done) {
    const user = users.find((user) => user.id === id);
    done(null, user);
})

const users = [
    { id: 1, username: 'yariv', password: 'katz' },
    { id: 2, username: 'hello', password: 'world' },
    { id: 3, username: 'foo', password: 'bar' },
]

passport.use(new LocalStrategy(function (username, password, done) {

    for (let user of users) {
        if (user.username === username && user.password === password) {
            done(null, user);
            return;
        }
    }

    done(null, false);
    // done(null, user) // send the user
}))



app.route('/login')
    .get(function (req, res, next) {
        res.send(`
        <form method="post" action="/login">
            <div>
                <input type="text" name="username" placeholder="username" />
            </div>
            <div>
                <input type="password" name="password" placeholder="password" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        `);
    })
    .post(passport.authenticate('local', { session: true }), function (req, res, next) {
        res.redirect('/restricted');
    });


function myAuthMiddleware() {
    return function (req, res, next) {
        if (!req.user) {
            res.status(401).send('unauthorized');
        } else {
            next()
        }
    }
}

app.get('/restricted', myAuthMiddleware(), function (req, res) {
    res.send('you are in restricted section');
})


app.listen(3000, function () {
    console.log('this will be printed when we are listening to port 3000');
})
