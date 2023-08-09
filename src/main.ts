import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import globalComponents from '@/plugins/global-components'

import '@/assets/styles/main.css'
import '@/assets/styles/tailwind/main.css'

const app = createApp(App)

globalComponents.register(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
