import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import Cookies from 'js-cookie'

store.dispatch("init")
createApp(App).use(store).use(router).use(Cookies).mount('#app')
