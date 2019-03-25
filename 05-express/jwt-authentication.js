/**
 * create an express application
 *
 * 1 - represents a server
 * 2 - server is listening on port
 * 3 - for each request return response
 */

const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');



const app = express();

app.use(bodyParser.urlencoded());
app.use(passport.initialize());

const users = [
    { id: 1, username: 'yariv', password: 'katz', role: 'admin' },
    { id: 2, username: 'hello', password: 'world', role: 'user' },
    { id: 3, username: 'foo', password: 'bar', role: 'guest' },
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
}));

passport.use(new JWTStrategy({ secretOrKey: 'secret', jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() }, function (jwt_payload, done) {
    const userid = jwt_payload.id;
    for (let user of users) {
        if (user.id === userid) {
            done(null, user);
            return;
        }
    }
    done(null, false);
}));

function myJwt() {
    // return function(req, res, next) {}
    return passport.authenticate('jwt', { session: false });
}


/**
 * @param {string[]} roles - ['admin', 'user']
 */
function myAuthorization(roles) {
    return function (req, res, next) {
        const user = req.user;
        if (roles.indexOf(user.role) === -1) {
            res.status(403).json({ unauthorized: 'you are unauthorized to view this' })
        } else {
            next();
        }
    }
}

// /users/1
// /users/foo/bar
// app.use('/users', myJwt());
app.use('/users', passport.authenticate('jwt', { session: false }), myAuthorization(['admin']));

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTUzNTAyMDI4fQ.bOTaB97E-Bp0T42zPa8NflUKQ1jVSRz4Iv2KhlwlGeo

/**
 * I want to protect this with JWT authentication
 */
app.get('/users', function (req, res /*, next*/) {
    res.json(users);
});

app.get('/foo', function (req, res /*, next*/) {
    res.json(users);
});

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
    .post(passport.authenticate('local', { session: false }), function (req, res, next) {
        // we need to send to the user the jwt token


        const token = jwt.sign({ id: req.user.id }, 'secret');
        //res.send(token ???);

        res.send(token);
    });


app.listen(3000, function () {
    console.log('this will be printed when we are listening to port 3000');
})
