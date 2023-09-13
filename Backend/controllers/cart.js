import { getCart, insertToCart, updateCartById, removeFromCart, clearCart } from "../models/cartModel.js"

export const showCart = ( req, res ) => {
    getCart( req.params.id, ( err, results ) => {
        if ( err ){
            res.send( err )
        } else {
            res.json( results )
        }
    })
}

export const createCart = ( req, res ) => {
    const data = [req.body]
    insertToCart( data, ( err, results ) => {
        if ( err ){
            res.send( err )
        } else {
            res.json( results )
        }
    })
}

export const updateCart = ( req, res ) => {
    const data = req.body
    const id = req.params.id
    updateCartById( data, id, ( err, results ) => {
        if ( err ){
            res.send( err )
        } else {
            res.json( results )
        }
    })
}

export const deleteFromCart = ( req, res ) => {
    const id = req.params.id
    removeFromCart( id, ( err, results ) => {
        if ( err ){
            res.send( err )
        } else {
            res.json( results )
        }
    })
}

export const deleteCart = ( req, res ) => {
    const id = req.params.id
    clearCart( id, ( err, results ) => {
        if ( err ){
            res.send( err )
        } else {
            res.json( results )
        }
    })
}