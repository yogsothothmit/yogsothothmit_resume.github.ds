// get the client
const mysql = require('mysql2/promise');
// create the connection
const connection = await mysql.createConnection({
  host: 'nnsgluut5mye50or.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'kmran0vf77a8y1tk',
  database: 'resume_project'
});
// query database
const [rows] = await connection.execute(
    'select * from  resume_project;');
Console.log(rows);
connection.end();