import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'   
import App from './App.vue'
import './style.css'

const app = createApp(App)

import pt from './locales/pt'
import en from './locales/en'
import sp from './locales/sp'


const languages = {
    pt,
    en,
    sp
}

const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'en',
    messages: languages,
  
})

  
app.use(i18n).mount('#app')
