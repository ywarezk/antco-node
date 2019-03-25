

const Client = require('pg').Client;

// hostname
// password
// username
// postgres
// port

// postgres://username:password@hostname:5432/nerdeez
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: false
})

client.connect().then(function () {

    // now im connected to the db
    return client.query(`
        CREATE TABLE tasks(id INTEGER PRIMARY KEY,title VARCHAR (50),description TEXT, time TIMESTAMP)
    `)

}).then(function (result) {
    debugger;
})