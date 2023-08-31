import { getProducts, getProductById, insertProduct, updateProductById, deleteProductById } from "../models/productModel.js"

//Get all Products
export const showProducts = ( req, res ) => {
    getProducts(( err, results) => {
        if ( err ) {
            res.send( err )
        } else {
            res.json( results )
        }
    }

    )
}

//Get single product
export const showProductbyId = ( req, res ) => {
    getProductById( req.params.id, ( err, results ) => {
        if ( err ) {
            res.send( err )
        } else {
            res.json( results )
        }
    })
}

//Create a new Product
export const createProduct = ( req, res ) => {
    const data = req.body
    insertProduct( data, ( err, results ) => {
        if ( err ) {
            res.send( err )
        } else {
            res.json( results )
        }
    })
}

//Update Product
export const updateProduct = ( req, res ) => {
    const data = req.body
    const id = req.params.id
    updateProductById( data, id, ( err, results ) => {
        if ( err ) {
            res.send( err )
        } else {
            res.json( results )
        }
    })
}

//Delete Product
export const deleteProduct = ( req, res ) => {
    const id = req.params.id
    deleteProductById( id, ( err, results ) => {
        if ( err ) {
            res.send( err )
        } else {
            res.json( results )
        }
    })
}
 
