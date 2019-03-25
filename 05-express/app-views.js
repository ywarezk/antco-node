/**
 * create an express application
 *
 * 1 - represents a server
 * 2 - server is listening on port
 * 3 - for each request return response
 */

const express = require('express');

const app = express();

// the directory where are template files are located
const path = require('path');
app.set('views', path.resolve(__dirname, 'mst-views'));

// which template engine am i going to use
app.engine('mst', require('mustache-express')())
app.set('view engine', 'mst');

app.get('/login', function (req, res) {
    res.render('login', { message: 'hello world' });

    // res.send(`
    //  res.send(`
    // <form method="post" action="/login">
    //     <div>
    //         <input type="text" name="username" placeholder="username" />
    //     </div>
    //     <div>
    //         <input type="password" name="password" placeholder="password" />
    //     </div>
    //     <div>
    //         <button type="submit">Submit</button>
    //     </div>
    // </form>
    // `);
    // `)
    // res.sendFile('login.html');
})

app.listen(3000, function () {
    console.log('this will be printed when we are listening to port 3000');
})
