const pg = require('pg');

const connection = require('./config');

const client = new pg.Client(connection);
client.connect()
.then(()=> console.log('Database connected successfully..'))
.catch(err => console.error('Error in connection: ',err));

module.exports = client;