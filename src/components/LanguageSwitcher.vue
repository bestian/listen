<template>
  <div class="language-switcher">
    <button
      @click="switchLanguage"
      class="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
      :title="$t('language.currentLanguage')"
    >
      <span class="w-5 h-5 flex items-center justify-center">
        {{ currentLanguageFlag }}
      </span>
      <span class="hidden sm:inline">{{ currentLanguageName }}</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLanguage } from '../i18n/init'

const { locale, t } = useI18n()

const currentLanguageFlag = computed(() => {
  return locale.value === 'zh' ? '🇹🇼' : '🇺🇸'
})

const currentLanguageName = computed(() => {
  return locale.value === 'zh' ? '繁體中文' : 'English'
})

const switchLanguage = () => {
  const newLocale = locale.value === 'zh' ? 'en' : 'zh'
  setLanguage(newLocale)
}
</script>

<style scoped>
.language-switcher {
  position: relative;
}
</style>
