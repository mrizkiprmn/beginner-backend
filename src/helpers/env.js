require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    JWTSECRET: process.env.JWTSECRET,
    TOKENREFREST: process.env.TOKENREFREST,
    USERMAIL: process.env.USERMAIL,
    USERPASS: process.env.USERPASS
}