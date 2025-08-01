import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon } from './main-icons'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Register the icon component globally
app.component('v-icon', OhVueIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
