import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import vant from '@/vant'
import wave from '@/directive/wave'
import 'swiper/swiper.min.css'
import '@/assets/styles/style.scss'

const app = createApp(App)
.use(router)
.use(store)
.use(vant)
.directive('wave', wave)
.mount('#app')