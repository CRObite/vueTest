import { createApp } from 'vue'
import App from './App'
import component from '@/components/UI'

const app = createApp(App)

component.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
