import pkg from 'jsonwebtoken'
const { sign, verify } = pkg
import { config } from 'dotenv'
config()

export function createToken( user ){
    return sign(
        {
            email: user.userEmail,
            password: user.userPass
        },
        process.env.secret_key,
        {
            expiresIn: "1h"
        }
    )
}


export function verifyToken( res, req, next ){
    //grab token
    const token = req.headers["token"]

    if ( verify( token, { secret:process.env.secret_key }) ){
        next()
    } else {
        res.json({
            msg: "Unable to verify token",
            status: res.statusCode
        })
    }
}