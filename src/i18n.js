import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import global_en from './translations/en/global.json'
import global_es from './translations/es/global.json'

i18n.use(initReactI18next).init({
  debug: false,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: global_en,
    },
    es: {
      translation: global_es,
    },
  },
})

export default i18n
