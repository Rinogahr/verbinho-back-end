require("dotenv").config();
const mysql = require("mysql");

const HOST = process.env.VERBINHO_DB_HOST;
const USER = process.env.VERBINHO_DB_USERNAME;
const PASSWORD = process.env.VERBINHO_DB_PASSWORD;
const PORT = Number(process.env.VERBINHO_DB_PORT);
const DATABASE = process.env.VERBINHO_DB_DATABASE;
const TIMEZONE = process.env.VERBINHO_TIMEZONE;
const CHARSET = process.env.VERBINHO_CHARSET;

// console.log(HOST, USER, PASSWORD);

const createConnection = () => {
  return mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    port: PORT,
    database: DATABASE,
  });
};

exports.querySync = (query, data, {} = {}) =>
  new Promise((res, rej) => {
    const connection = createConnection();
    connection.connect((error) => {
      if (error) {
        connection.end();
        return rej(error);
      }
      connection.query(query, data, (error, result) => {
        if (error) {
          connection.end();
          return rej(error);
        }
        res(result);
        connection.end();
      });
    });
  });
