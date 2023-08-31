import db from '../config/database'


//Select all products
export const getProducts = ( result ) => {
    db.query( 'SELECT id, name, decsription, model, character, price, level, url, quantity FROM products',
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

//Select single product
export const getProductById = ( id, result ) => {
    db.query(
        'SELECT id, name, decsription, model, character, price, level, url, quantity FROM products WHERE id = ?',
        [id],
        ( err, results ) => {
            if ( err ) {
                console.log( err )
                result( err, null )
            } else {
                result( null, results[0] )
            }
        }
    )
}

//Insert Product
export const insertProduct = ( data, result ) => {
    db.query(
        'INSERT INTO products SET ?;', [ data ], ( err, results ) => {
            if ( err ) {
                console.log( err )
                result( err, null )
            } else {
                result( null, results )
            }
        }
    )
} 

//Update Product
export const updateProductById = ( data, id, result ) => {
    db.query(
        'UPDATE products SET name = ?, description = ?, model = ?, character = ?, price = ?, level = ?, url = ?, quantity = ? WHERE id = ?',
        [
            data.name,
            data.description,
            data.model,
            data.character,
            data.price,
            data.level,
            data.url,
            data.quantity,
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