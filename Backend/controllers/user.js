import { getUsers, getUserById, insertUser, updateUserById, deletUserById } from "../models/userModel.js"
import bcrypt from 'bcrypt'
import { createToken } from "../middleware/authenticateUser.js"

//Get All Users
export const showUsers = ( req, res ) => {
    getUsers((err, results) => {
        if (err) {
            res.send( err )
        } else {
            res.json( results )
        }
    })
}

//Get single User
export const showUserById = ( req, res ) => {
    getUserById( req.params.id, ( err, results ) => {
        if (err) {
            res.send( err )
        } else {
            res.json( results )
        }
    } )
}

//Create new User
export const createUser = ( req, res ) => {
    const data = req.body
    data.userPass = bcrypt.hashSync( data.userPass, 10 )
    const user = {
        userEmail: data.userEmail,
        userPass: data.userPass
    }
    let token = createToken( user )
    insertUser( data, ( err, results ) => {
        if ( err ) throw err
        res.cookie('authorizedUser', token, {
            maxAge: 36000,
            httpOnly: true
        })
        res.json({
            results, token
        })
    })
}

//Update Usr 
export const updateUser = ( req, res ) => {
    const data = req.body
    data.userPass = bcrypt.hashSync( data.userPass, 10 )
    const id = req.params.id
    updateUserById( data, id, ( err, results ) => {
        if ( err ) {
            res.send( err )
        } else {
            res.json( results )
        }
    })
}

//Delete Product 
export const deleteUser = ( req, res ) => {
    const id = req.params.id
    deletUserById( id, ( err, results ) => {
        if ( err ){
            res.send( err )
        } else {
            res.json( results )
        }
    })
}