import express from 'express'
import path from 'path'
import { config } from 'dotenv'
config()
//From errorHandling Folder
import { errorHandling } from './middleware/errorHandling.js'
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
//From routes folder
import Router from './routes/routes.js'
import cookieParser from 'cookie-parser'

// Initialise Express
const app = express()

app.use(( req, res, next ) => {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Request-Method", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Expose-Headers", "Authorization");
	next();
})


app.use(express.json())
app.use(cookieParser())
app.use(cors())

// app.use( session({
//     secret: process.env.session_secret,
//     resave: true,
//     saveUninitialized: true
// }))

app.use(express.static('./static'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.use(Router)
app.use(errorHandling)

app.get('/', ( req, res ) => {
    res.status(200)
    res.sendFile(path.resolve("./static/html/index.html"))
})
app.listen( 5000, () => console.log('Server running at http://localhost:5000'))