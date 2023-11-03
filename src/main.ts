import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElIconModules from  "@element-plus/icons-vue";
import store from './store'
import router from './router'
const app = createApp(App)

for(let iconName in ElIconModules){ 
    if (Reflect.has(ElIconModules, iconName)) {
        // @ts-ignore
        const item = ElIconModules[iconName]
        app.component(iconName,item)
    }
}
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')