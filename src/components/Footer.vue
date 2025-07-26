<template>
  <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">深度聆聽</h3>
          <p class="text-gray-400">
            透過即時逐字稿記錄，讓每次對話都更有意義
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">功能</h3>
          <ul class="space-y-2 text-gray-400">
            <li>視訊會議</li>
            <li>即時逐字稿</li>
            <li>會議記錄</li>
            <li>資料匯出</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">聯絡我們</h3>
          <ul class="space-y-2 text-gray-400">
            <li>GitHub</li>
            <li>電子郵件</li>
            <li>社群</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} 深度聆聽. 版權所有。</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 不需要額外的邏輯
</script>
