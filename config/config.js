module.exports = {
  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  "production": {
    "username": "sophanda",
    "password": process.env.DB_PASSWORD,
    "database": "fifty-states-visited-database-server-sophanda",
    "host": "fifty-states-visited-database-server.database.windows.net",
    "dialect": "mssql"
  }
}
