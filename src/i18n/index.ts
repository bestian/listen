import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

export default createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'zh', // 預設語言為繁體中文
  fallbackLocale: 'en', // 備用語言為英文
  messages: {
    en,
    zh
  }
})
