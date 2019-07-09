import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { str as crc32 } from 'crc-32'
import language_config from '../../../i18n-config'

i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    // TODO: Optimize translation file loading with GraphQL
    // TODO: Enable this when translations are ready
    resources: {
        // en: { translations: require('../../translations/en.json') },
        // de: { translations: require('../../translations/de.json') },
        // es: { translations: require('../../translations/es.json') },
        // fr: { translations: require('../../translations/fr.json') },
        // id: { translations: require('../../translations/id.json') },
        // it: { translations: require('../../translations/it.json') },
        // pl: { translations: require('../../translations/pl.json') },
        // pt: { translations: require('../../translations/pt.json') },
        // ru: { translations: require('../../translations/ru.json') },
        // th: { translations: require('../../translations/th.json') },
        // vi: { translations: require('../../translations/vi.json') },
        // zh_zn: { translations: require('../../translations/zh_zn.json') },
        // zh_tw: { translations: require('../../translations/zh_tw.json') },
    },
    ns: ['translations'],
    defaultNS: 'translations',

    // To investigate react-i18next translation issues enable this
    debug: false,

    interpolation: {
        escapeValue: false,
    },

    react: {
        wait: true,
        useSuspense: false,
        hashTransKey(defaultValue) {
            return crc32(defaultValue)
        },
    },
})

i18n.languages = Object.keys(language_config)

export const localize = (string, values) =>
    i18n.t(crc32(string), { defaultValue: string, ...values })

export default i18n