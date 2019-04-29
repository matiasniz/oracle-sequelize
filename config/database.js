module.exports = {
    database: process.env.DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT,
    pool:     {
      maxConnections: 5,
      maxIdleTime:    3000
    },
    dialect: process.env.DB_DIALECT,
    logging: console.log
}