import db from '../config/database.js'
import { compare } from 'bcrypt'
import { createToken } from '../middleware/authenticateUser.js'

//Get users
export const getUsers = ( result ) => {
    db.query(
        'SELECT userID, firstName, lastName, userAge, gender, userRole, userEmail, userPass, userProfile FROM users',
        ( err, results ) => {
            if ( err ) {
                console.log( err )
                result( err, null )
            } else {
                result( null, results )
            }
        }
    )
}

//Get single user
export const getUserById = ( id, result ) => {
    db.query( 
        'SELECT firstName, lastName, userAge, gender, userRole, userEmail, userPass, userProfile FROM users WHERE userID = ?', [id],
        ( err, results ) => {
            if ( err ){
                console.log( err )
                result( err, null )
            } else {
                result( null, results )
            }
        }
    )
}

//Insert User
export const insertUser = ( data, result ) => {
    db.query( 'INSERT INTO users SET ?', [data], ( err, results ) => {
        if ( err ){
            console.log( err )
            result( err, null )
        } else {
            result( null, results )
        }
    })
}

//Update User 
export const updateUserById = ( data, id, result ) => {
    db.query( 
        'UPDATE users SET firstName = ?, lastName = ?, userAge = ?, gender = ?, userRole = ?, userEmail = ?, userPass = ?, userProfile = ? WHERE userID = ?',
        [
            data.firstName,
            data.lastName,
            data.userAge,
            data.gender,
            data.userRole,
            data.userEmail,
            data.userPass,
            data.userProfile,
            id
        ],
        ( err, results ) => {
            if ( err ) {
                console.log( err )
                result( err, null )
            } else {
                result( null, results )
            }
        }
    )
}

//Delete User
export const deletUserById = ( id, result ) => {
    db.query(
        'DELETE FROM users WHERE userID = ?', [id], ( err, results ) => {
            if ( err ) {
                console.log( err )
                result( err, null )
            } else {
                result( null, results )
            }
        }
        )
}

//LOGIN
export const userLogin = ( req, res ) => {
    const { userEmail, userPass } = req.body

    const query = `SELECT firstName, lastName, userAge, gender, userRole, userEmail, userPass, userProfile FROM users WHERE userEmail = '${userEmail}`

    db.query( query, async( err, result ) => {
        if ( err ) throw err

        if ( !result?.length ){
            res.json({
                status: res.statusCode,
                message: "Incorrect Email Address"
            })
        } else {
            await compare( userPass, result[0].userPass, ( cErr, cResult ) => {
                if ( cErr ) throw cErr

                //create Token
                const token = createToken({
                    userEmail,
                    userPass
                })
                
                //save token
                res.cookie( 'token', token, {
                    maxAge: 3600000,
                    httpOnly: true
                })

                if ( cResult ){
                    res.json({
                        message: "You have successfully logged in",
                        token,
                        result: result[0]
                    })
                } else {
                    res.json({
                        status: res.statusCode,
                        message: 'Unregistered user or incorrect password!'
                    })
                }
            })
        }
    })
}