import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { COMMON } from '~/constants'
import { enTranslations, viTranslations } from '~/locales'

const resources = {
  en: {
    translation: enTranslations
  },
  vi: {
    translation: viTranslations
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: COMMON.LOCALES.VI,
    resources,
    fallbackLng: COMMON.LOCALES.VI,
    debug: false,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false
    }
  })

export default i18n
