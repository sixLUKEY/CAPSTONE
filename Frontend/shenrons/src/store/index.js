import { createStore } from 'vuex'
import axios from 'axios'
import cookies from 'js-cookie'
import router from '@/router'


const prodUrl = 'https://shenron-api.onrender.com/products/'
const usersUrl = 'https://shenron-api.onrender.com/users/'
const baseUrl = 'https://shenron-api.onrender.com/'

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
    cart: [] || null
  },
  getters: {
    cartTotalPrice( state ){
      return state.cart.reduce(( total, product ) => total + parseFloat(product.price), 0)
    }
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
        let  products  = await (await fetch( prodUrl )).json()
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
    },
    async fetchUsers( context ){
      try{
        let users = await (await fetch( usersUrl )).json()
        if ( users ){
          context.commit( "setUsers", users )
        } else {
          context.commit(alert("There was an error fetching users"))
        }
      } catch ( error ){
        alert( error )
      }
    },
    async fetchUser( context, id ){
      try{
        let user = await ( await fetch( usersUrl + id )).json()
        if ( user ){
          context.commit( "setUser", user )
        } else {
          context.commit( alert("User not found"))
        }
      } catch ( error ){
        alert( error )
      }
    },
    async addProduct( context, productData ){
      try{
        const response = ( await axios.post( prodUrl, productData )).data

        if ( response ){
          context.dispatch("fetchProducts")
          alert( "successfully added ")
          router.push('/admin/items')
        } else {
          alert("Failed to add product")
        }
      } catch ( err ){
        console.error( err )
        return false
      }
    },
    async updateProduct( {commit}, data ){
      try{
        const response = await axios.put( prodUrl + data.id, data )
        if ( response.status === 200 ){
          commit( 'updateProduct', data )
          return true
        } else {
          return false
        }
      } catch ( err ){
        console.error( err )
        return false
      }
    },
    async deleteProduct( {commit}, prodID ){
      try {
        await axios.delete( prodUrl + prodID )
        commit( 'deleteProduct', prodID )
        return true
      } catch ( err ){
        console.error( err )
        return false
      }
    },
    async fetchCart( context, id ){
      const response = await axios.get( `${usersUrl}${id}/cart`)
      context.commit( 'setCart', response.data )
    },
    async addToCart( {commit}, {userID, prodID} ){
      try {
        const response = await axios.post( `${usersUrl}${userID}/cart`,
        {
          userID,
          prodID
        })

        if ( response.status === 200 ){
          commit( 'addProductToCart', response.data )
          console.log( response.data )
        } else {
          alert('an error occurred')
        }
      } catch ( err ){
        console.error( err )
      }
    },
    async removeFromCart( {commit}, { userID, cartID } ){
      try {
        await axios.delete(`${usersUrl}${userID}/cart/${cartID}`)
        commit('removeFromCart', cartID)
      } catch ( err ){
        console.error( err )
      }
    },
    async updateUser( { commit }, data ){
      try {
        const response = await axios.put( usersUrl + data.id, data )
        if ( response.status === 200 ){
          commit('updateUser', data)
          return true
        } else {
          return false
        }
      } catch ( err ){
        console.error( err )
        return false
      }
    },
    async register( context, payload ){
      try {
        const response = await axios.post( `${baseUrl}register`, payload )
        console.log( response.data )
        const { message, error, token } = response.data
        if ( message === 'An error occurred'){
          context.commit('setError', message)
          context.commit('setRegStatus', 'Not Registered')
          return { success: false, error: message }
        } else if ( token ){
          context.commit('setToken', token)
          context.commit('setRegStatus', 'Registered successfully')
          return { success: true, token }
        } else if ( err ){
          console.error( err )
        }
      } catch ( err ){
        context.commit('setError', err)
        console.log( err )
        context.commit('setRegStatus', 'Not registered')
        throw err
      }
    },
    async deleteUser( { commit }, userID ){
      try {
        await axios.delete( usersUrl + userID )

        commit('deleteUser', userID)
        return true
      } catch ( err ){
        console.error( err )
        return false
      }
    },
    async login( context, payload ){
      try {
        const response = await axios.post(`${baseUrl}login`, payload)
        console.log( response.data.status )
        const { error, message, token, result } = response.data

        if ( message === 'Unregistered user or incorrect password'){
          context.commit('setError', message)
          context.commit('setLogStatus', 'Not logged in')
          return { success: false, error: message }
        } else if ( message && token && result ){
          context.commit('setUser', result)
          context.commit('setToken', token)
          context.commit('setUserData', result)
          context.commit('setLogStatus', 'Logged In')
          cookies.set('userToken', token, { expires: 1 })
          return { success: true, token, result }
        } else if ( error ){
          context.commit('setError', error  )
          return { success: false, error: error }
        } else {
          context.commit('setError', 'Unknown error occured')
          context.commit('setLogStatus', 'Not Logged In')
          return { success: false, error: 'Unknown error' }
        }
      } catch ( err ){
        console.log( err )
      }
    },
    cookieCheck( context ){
      const token = cookies.get('userToken')
      if ( token ){
        context.commit('setToken', token)
      }
    },
    init( context ){
      context.dispatch('coookieCheck')
    },
    async logout( context ){
      context.commit('setToken', null)
      context.commit('setUser', null)
      context.commit('setUserData', null)
      cookies.remove('userToken')
    },
    async clearCart( { commit }, { userID } ){
      try {
        await axios.delete(`${usersUrl}${userID}/cart`)
        commit('clearCart', userID)
      } catch ( err ){
        console.error( err )
      }
    },
    successPop(){
      const pop = document.getElementById('success')
      pop.classList.toggle('alert')
      setTimeout(() => {
        pop.classList.toggle('alert')
      }, 2000);
    },
    errorPop(){
      const pop = document.getElementById('error')
      pop.classList.toggle('alert')
      setTimeout(() => {
        pop.classList.toggle('alert')
      }, 2000)
    }
  }
})
