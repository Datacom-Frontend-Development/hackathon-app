/*const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.resolve('./database/database.sqlite')

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message)
  } else {
    console.log('Connected to the database.')
  }
})

module.exports = db
*/

const sqlite3 = require('sqlite3').verbose();

// open the database
const db = new sqlite3.Database('./mydatabase.db');

// create a new table
db.run('CREATE TABLE mytable (id INTEGER PRIMARY KEY, name TEXT)');
