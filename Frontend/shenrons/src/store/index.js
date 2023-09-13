import { createStore } from 'vuex'
import axios from 'axios'
import cookies from 'js-cookie'
import router from '@/router'

const prodUrl = 'https://shenron-api.onrender.com/products/'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    token: null,
    userData: null,
    userRole: null,
    message: null,
    error: null,
    regStatus: null,
    logStatus: null,
    cart: []
  },
  mutations: {
    setProducts: ( state, products ) => {
      state.products = products
    },
    setProduct: ( state, product ) => {
      state.product = product
    },
    setUsers: ( state, users ) => {
      state.users = users
    },
    setUser: ( state, user ) => {
      state.user = user
    },
    setCart: ( state, cart ) => {
      state.cart = cart
    },
    addProduct: ( state, product ) => {
      state.products.push( product )
    },
    updateProduct: ( state, data ) => {
      const index = state.products.findIndex( product => product.id === data.id )
      if ( index !== -1 ){
        state.products[index] = data
      }
    },
    deleteProduct: ( state, prodID ) => {
      state.products = state.products.filter(
        ( product ) => product.id !== prodID
      )
    },
    deleteUser: ( state, userID ) => {
      state.users = state.users.filter(
        ( user ) => user.id !== userID
      )
    },
    updateUser: ( state, data ) => {
      const index = state.userData.userID
      if ( index !== -1 ){
        state.users[index] = data
      }
    },
    clearCart: ( state ) => {
      state.cartItems = []
    },
    addProductToCart: ( state, product ) => {
      state.cart.push( product )
    },
    removeFromCart: ( state, cartID ) => {
      state.cart = state.cart.filter(( cart ) => cart.cartID !== cartID )
    },
    setRegStatus: ( state, status ) => {
      state.regStatus = status
    },
    setLogStatus: ( state, status ) => {
      state.logStatus = status
    },
    setToken: ( state, token ) => {
      state.token = token
      cookies.set('userToken', token, {
        expires: 1,
        path: "/",
        secure: true,
        sameSite: "none",
      })
    },
    setUserData: ( state, userData ) => {
      state.userData = userData
      if ( userData && userData.userRole ){
        state.userRole = userData.userRole
        localStorage.setItem("userData", JSON.stringify( userData ))
        console.log( userData, userData.userRole )
      } else {
        state.userData = null
        state.userRole = null
        localStorage.removeItem("userData")
      }
    },
    setMessage: ( state, message ) => {
      state.message = message
    },
    setError: ( state, error ) => {
      state.error = error
    }
  },
  actions: {
    async fetchProducts( context ){
      try{
        let products = await (await fetch( prodUrl )).json()
        console.log( products )
        if ( products ){
          context.commit( "setProducts", products )
        } else {
          context.commit(alert("There was an error fetching the products"))
        }
      } catch ( error ){
        alert( error )
      }
    },
    async fetchProduct( context, id ){
      try{
        let product = await ( await fetch( prodUrl + id )).json()
        console.log( product )
        if ( product ){
          context.commit( "setProduct", product )
        } else {
          context.commit( alert("Product not Found"))
        }
      } catch ( error ){
        alert( error )
      }
    }
  }
})
