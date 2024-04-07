import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'   
import App from './App.vue'
import './style.css'

const app = createApp(App)

import pt from './locales/pt-BR'
import en from './locales/en'
import sp from './locales/sp'

console.log()

const languages = {
    pt,
    en,
    sp
}

const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: 'en',
    messages: languages,
    missingWarn: false
  
})

  
app.use(i18n).mount('#app')
