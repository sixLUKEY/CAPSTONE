import db from "../config/database.js";

//Fetch Cart
export const getCart = ( id, result ) => {
    db.query(
        `SELECT cartID, prodName, descr, model, prodCharacter, price, prodLevel, url, quantity 
        FROM users
        INNER JOIN cart ON users.userID = cart.userID
        INNER JOIN products ON cart.productID = products.prodID
        WHERE cart.userID = ? `,
        [id],
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

//Add to Cart
export const insertToCart = ( data, result ) => {
    db.query( 'INSERT INTO cart SET ?;', data, ( err, results ) => {
        if ( err ) {
            console.log( err )
            result( err, null )
        } else {
            result( null, results )
        }
    })
}


//Update Cart 
export const updateCartById = ( data, id, result ) => {
    db.query(
        `UPDATE cart SET ? WHERE cartID = ? `,
        [ data, id ],
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


//Remove from Cart 
export const removeFromCart = ( id, result ) => {
    db.query(
        `DELETE FROM cart WHERE cartID = ?`, id, ( err, results ) => {
            if ( err ){
                console.log( err )
                result( err, null )
            } else {
                result( null, results )
            }
        }
    )
}

//Clear Cart
export const clearCart = ( id, result ) => {
    db.query(
        `DELETE FROM cart WHERE userID = ?`, id, ( err, results ) => {
            if ( err ){
                console.log( err )
                result( err, null )
            } else {
                result( null, results )
            }
        }
    )
}