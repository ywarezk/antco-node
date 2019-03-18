/**
 * get -> /login present a login form to the user
 * post -> /login - grab the credentials from the request body and res.send them
 */

const express = require('express');

const app = express();

// app.get('/login', function(req, res, next) {

// })

// app.post('/login', function(req, res, next) {
//     req.body = {}
// })

const bodyParser = require('body-parser');

// "?username=dfgsdg&password=sdfsdf"

app.use('/login', bodyParser.urlencoded());
app.use('/login', bodyParser.json());


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
    .post(function (req, res, next) {
        res.json(req.body);
    });


app.listen(3000, function () {
    console.log('this will be printed when we are listening to port 3000');
})
