<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ t('footer.title') }}</h3>
          <p class="text-gray-400">
            {{ t('footer.description') }}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">{{ t('footer.contact') }}</h3>
          <ul class="space-y-2 text-gray-400">
            <li>GitHub：<a class="text-underline" href="https://github.com/bestian/listen" target="_blank">https://github.com/bestian/listen</a></li>
            <li>Email：<a class="text-underline" href="mailto:bestian@gmail.com" target="_blank">bestian@gmail.com</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">{{ t('footer.sponsor') }}</h3>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a href="https://www.bestian.tw/sponsor" target="_blank" class="text-gray-400 text-underline">
                {{ t('footer.sponsorText') }}
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
