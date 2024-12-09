import en from '@/i18n/en.json'
import de from '@/i18n/de.json'
export default defineI18nConfig(() => ({
    legacy: false,
    locales: ['en', 'de'],
    locale: 'de',
    messages: {
      en: en,
      de: de
    }
  }))