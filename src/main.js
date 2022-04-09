import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import Vuex from "vuex";
import storeInit from './store'

const app = createApp(App)

app.use(Vuex)
app.use(router)
app.use(storeInit)
app.mount('#app')
