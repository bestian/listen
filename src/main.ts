import './assets/main.css'
import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { initI18n } from './i18n/init'

const app = createApp(App)

app.use(router)
app.use(i18n)

// 初始化 i18n
initI18n()

app.mount('#app')
