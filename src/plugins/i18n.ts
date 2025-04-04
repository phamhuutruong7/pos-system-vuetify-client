import { createI18n } from 'vue-i18n'
import en from '../i18n/locales/en.json'
import fr from '../i18n/locales/fr.json'


const messages = {
  en,
  fr
}

export const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})
