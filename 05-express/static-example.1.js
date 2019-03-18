/**
 * create an express application
 *
 * 1 - represents a server
 * 2 - server is listening on port
 * 3 - for each request return response
 */

const express = require('express');

const app = express();


// /assets/index.html => 
// /assets/images/logo.png => logo.png
const path = require('path');
app.use('/assets', express.static(path.resolve(__dirname, 'static')))

app.listen(3000, function () {
    console.log('this will be printed when we are listening to port 3000');
})
