import './assets/style/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './Router/router'
import { createPinia } from 'pinia'
import { useProduct } from './Store/productlist'

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)

// ✅ init cart from localStorage
const cartStore = useProduct(pinia)
cartStore.initCart()
app.mount('#app')
