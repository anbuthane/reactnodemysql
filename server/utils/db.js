const mysql = require("mysql2/promise")
async function getConnection() {
  // create the connection
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "ting",
    password: "ting",
    database: "reactnodemysqlcrud",
  })
  return connection
}

module.exports = getConnection
