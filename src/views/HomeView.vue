<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">深度聆聽</h1>
      <p class="text-xl text-gray-600 mb-8">
        透過即時逐字稿記錄，讓每次對話都更有意義
      </p>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">視訊會議</h3>
          <p class="text-gray-600 mb-4">
            整合Jitsi Meet視訊會議系統，支援多人同時參與討論
          </p>
          <RouterLink
            to="/meeting"
            class="inline-block px-6 py-3 bg-jade-green text-white rounded-lg hover:bg-jade-green/90 transition-colors"
          >
            開始會議
          </RouterLink>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">逐字稿管理</h3>
          <p class="text-gray-600 mb-4">
            查看和管理所有會議逐字稿，支援上傳、編輯和下載
          </p>
          <RouterLink
            to="/transcription"
            class="inline-block px-6 py-3 bg-democratic-red text-white rounded-lg hover:bg-democratic-red/90 transition-colors"
          >
            管理逐字稿
          </RouterLink>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">即時逐字稿</h3>
          <p class="text-gray-600 mb-4">
            自動記錄會議內容，支援編輯、匯出和搜尋功能
          </p>
          <RouterLink
            to="/meeting"
            class="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            查看逐字稿
          </RouterLink>
        </div>
      </div>

      <div class="bg-gray-50 p-8 rounded-lg">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">功能特色</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-jade-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">高品質視訊</h3>
            <p class="text-gray-600">支援多人視訊會議，畫面清晰流暢</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-democratic-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">即時記錄</h3>
            <p class="text-gray-600">自動記錄會議內容，支援即時編輯</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">一鍵匯出</h3>
            <p class="text-gray-600">支援多種格式匯出，方便後續整理</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
