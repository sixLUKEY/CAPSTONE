import express from "express"

//Import function from controller
import { showProducts, showProductbyId, createProduct, updateProduct, deleteProduct } from "../controllers/Product.js"
import { showUsers, showUserById, createUser, updateUser, deleteUser } from "../controllers/user.js"
import { userLogin } from "../models/userModel.js"
import { showCart, createCart, updateCart, deleteCart, deleteFromCart } from "../controllers/cart.js"

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

//Get All Users 
router.get( '/users', showUsers )

//Get single User
router.get( '/users/:id', showUserById )

//Create User
router.post( '/register', createUser )

//Update User
router.put( '/users/:id', updateUser )

//Delete User
router.delete( '/users/:id', deleteUser )

//Login
router.post( '/login', userLogin )

//Get Cart
router.get( '/users/:id/cart', showCart )

//Create Cart
router.post( '/users/:id/cart', createCart )

//Delete Cart
router.delete( '/users/:id/cart', deleteCart )

//Delete from Cart
router.delete( '/users/:id/cart/:id', deleteFromCart )

//Update Cart
router.put( '/users/:id/cart/:id', updateCart )

export default router