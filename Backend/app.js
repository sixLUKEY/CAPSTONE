import express from 'express'
import path from 'path'
import { config } from 'dotenv'
config()
//From errorHandling Folder
import { errorHandling } from './middleware/errorHandling'
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
//From routes folder
import router from ''
import cookieParser from 'cookie-parser'

const app = express()
