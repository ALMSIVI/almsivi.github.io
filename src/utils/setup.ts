import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from '../data/i18n/en.json'
import zhTranslations from '../data/i18n/zh.json'

const typography = new Typography(fairyGateTheme)
typography.injectStyles()

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslations,
        },
        zh: {
            translation: zhTranslations,
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
})
