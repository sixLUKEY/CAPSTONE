import express from "express"

//Import function from controller
import { showProducts, showProductbyId, createProduct, updateProduct, deleteProduct } from "../controllers/Product.js"
import { showUsers, showUserById, createUser, updateUser, deleteUser } from "../controllers/user.js"
import { userLogin } from "../models/userModel.js"

// init express router
const router = express.Router()

// Get all Products
router.get( '/products', showProducts )

//Get single Product
router.get( '/products/:id', showProductbyId )

//Create Product
router.post( '/products', createProduct )

//Update Product 
router.put( '/products/:id', updateProduct )

//Delete Product
router.delete( '/products/:id', deleteProduct )

export default router