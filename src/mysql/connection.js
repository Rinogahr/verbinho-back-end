require('dotenv').config();
const mysql = require("mysql");

const con = mysql.createPool({
    host: process.env.HOST ,//||  "localhost",
    user: process.env.USER ,//|| "root",
    password: process.env.PASSWORD ,//|| "rpm0811",
    database: process.env.DATABASE ,//|| "verbinho",
    port: process.env.PORT,
    dateStrings: process.env.DATESTRINGS //|| "true"

});


module.exports = con;