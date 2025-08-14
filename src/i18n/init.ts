import i18n from './index'

// 初始化語言設定
export function initI18n() {
  // 從 localStorage 獲取語言偏好
  const savedLanguage = localStorage.getItem('preferredLanguage')
  
  // 如果沒有保存的語言偏好，檢測瀏覽器語言
  if (!savedLanguage) {
    const browserLanguage = navigator.language || navigator.languages?.[0] || 'en'
    
    // 簡化語言檢測：支援 zh-TW, zh-HK, zh-CN 等中文變體
    if (browserLanguage.startsWith('zh')) {
      i18n.global.locale.value = 'zh'
    } else {
      i18n.global.locale.value = 'en'
    }
  } else {
    i18n.global.locale.value = savedLanguage
  }
}

// 創建一個函數來更新語言並保存到 localStorage
export function setLanguage(locale: string) {
  i18n.global.locale.value = locale
  localStorage.setItem('preferredLanguage', locale)
}

export default initI18n
