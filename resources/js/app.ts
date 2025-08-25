import '../css/app.css'
import { createApp } from 'vue'
import PortFolioApp from './PortfolioApp.vue'
import router from './router/router'

// Buat app Vue
const app = createApp(PortFolioApp)

// Pasang router
app.use(router)

// Mount ke elemen #app (lihat di resources/views/app.blade.php)
app.mount('#app')
