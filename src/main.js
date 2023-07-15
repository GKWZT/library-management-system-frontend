import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import axios from "axios";

import 'virtual:svg-icons-register'
import SvgIcon from "./components/SvgIcon.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'




const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8080'

app.use(createPinia())
app.use(router)

app.mount('#app')

// 导入Svg图片插件，可以在页面上显示Svg图片
app.component('SvgIcon',SvgIcon)

// icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


