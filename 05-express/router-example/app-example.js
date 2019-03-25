/**
 * create an express application
 *
 * 1 - represents a server
 * 2 - server is listening on port
 * 3 - for each request return response
 */

const express = require('express');

const app = express();

// app.get('/users', function() {...})
// app.get('/users/:id', function() {...})

// app.get('/users', router)
const userRouter = require('./users');
app.use('/users', userRouter);

app.listen(3000, function () {
    console.log('this will be printed when we are listening to port 3000');
})
