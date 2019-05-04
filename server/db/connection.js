const monk = require('monk');
const connectionURL = process.env.MONGODB_URI || 'localhost/tigna-url';
const db = monk(connectionURL);

module.exports = db;