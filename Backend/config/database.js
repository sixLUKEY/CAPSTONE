import { config } from "dotenv";
config()
import mysql from 'mysql2'

const db = mysql.createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    database: process.env.dbDatabase
})

export default db

