<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <!-- 頁面標題 -->
      <div class="mb-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-2">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">
              逐字稿詳情 - {{ formatMeetingId(meetingId) }}
            </h1>
            <p class="text-gray-600">完整的會議逐字稿內容，以
              <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hant" target="_blank" rel="noopener noreferrer" class="text-blue-600">CC-BY-NC-ND 4.0</a>
              授權公開。</p>
          </div>
          <button
            @click="$router.push('/transcription')"
            class="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 flex items-center space-x-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span>返回列表</span>
          </button>
          <button
            @click="copyTranscriptionLink(meetingId)"
            class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center space-x-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span>複製連結</span>
          </button>
        </div>
      </div>

      <!-- 載入狀態 -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- 錯誤訊息 -->
      <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
        {{ error }}
      </div>

      <!-- 逐字稿內容 -->
      <div v-if="!loading && !error && transcriptionContent.length > 0" class="space-y-0">
        <div
          v-for="(message, index) in transcriptionContent"
          :key="index"
          class="bg-white border-b border-gray-200 md:border-b-0 md:rounded-lg md:shadow-md p-6 md:border md:border-gray-200"
        >
          <div class="flex items-start space-x-4">
            <!-- 頭像 -->
            <div class="flex-shrink-0">
              <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <img v-if="getPhotoURL(getSpeaker(message))" :src="getPhotoURL(getSpeaker(message))" :alt="getSpeaker(message)" class="w-10 h-10 rounded-full">
                <svg v-else class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>

            <!-- 訊息內容 -->
            <div class="flex-1 min-w-0">
              <div class="text-sm text-gray-500 mb-2" v-if="getSpeaker(message) || getDateTime(message)">
                {{ getSpeaker(message) }} {{ getDateTime(message) }}
              </div>
              <div class="text-gray-900 leading-relaxed whitespace-pre-wrap break-all">
                {{ dropSpeakerAndDateTime(message) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 空狀態 -->
      <div v-if="!loading && !error && transcriptionContent.length === 0" class="text-center py-12">
        <p class="text-gray-500">沒有找到逐字稿內容</p>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between gap-2 mt-4">
        <button
          @click="$router.push('/transcription')"
          class="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 flex items-center space-x-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span>返回列表</span>
        </button>
        <button
          @click="copyTranscriptionLink(meetingId)"
          class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center space-x-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          <span>複製連結</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 定義 props
const props = defineProps({
  user: {
    type: Object,
    default: null
  },
  userData: {
    type: Object,
    default: null
  }
})

// 從路由參數獲取會議ID
const meetingId = computed(() => {
  const id = route.params.meeting_id
  return Array.isArray(id) ? id[0] : id
})

// 響應式數據
const loading = ref(true)
const error = ref('')
const transcriptionContent = ref<string[]>([])

// 格式化會議ID (20250621 -> 2025-06-21)
const formatMeetingId = (meetingId: string) => {
  if (meetingId.length === 8) {
    return `${meetingId.substring(0, 4)}-${meetingId.substring(4, 6)}-${meetingId.substring(6, 8)}`
  }
  return meetingId
}

// 取得發言者
const getSpeaker = (message: string) => {
  const lines = message.split('\n')
  const firstLine = lines[0]

  // 檢查是否有時間戳格式 [時間] 發言者: 內容
  const timestampMatch = firstLine.match(/^\[(.+?)\]\s*(.+?):\s*(.*)/)
  if (timestampMatch) {
    return timestampMatch[2].trim()
  }

  // 檢查是否有簡單的 發言者: 內容 格式
  const simpleMatch = firstLine.match(/^(.+?):\s*(.*)/)
  if (simpleMatch) {
    return simpleMatch[1].trim()
  }

  // 如果都沒有，返回空字串（表示沒有明確發言者）
  return ''
}

const getDateTime = (message: string) => {
  const lines = message.split('\n')
  const firstLine = lines[0]

  // 檢查是否有時間戳格式 [時間] 發言者: 內容
  const timestampMatch = firstLine.match(/^\[(.+?)\]\s*(.+?):\s*(.*)/)
  if (timestampMatch) {
    return `[${timestampMatch[1]}]`
  }

  // 如果沒有時間戳，返回空字串
  return ''
}

const dropSpeakerAndDateTime = (message: string) => {
  const lines = message.split('\n')
  const firstLine = lines[0]

  // 檢查是否有時間戳格式 [時間] 發言者: 內容
  const timestampMatch = firstLine.match(/^\[(.+?)\]\s*(.+?):\s*(.*)/)
  if (timestampMatch) {
    const content = timestampMatch[3]
    const remainingLines = lines.slice(1)
    return [content, ...remainingLines].join('\n').trim()
  }

  // 檢查是否有簡單的 發言者: 內容 格式
  const simpleMatch = firstLine.match(/^(.+?):\s*(.*)/)
  if (simpleMatch) {
    const content = simpleMatch[2]
    const remainingLines = lines.slice(1)
    return [content, ...remainingLines].join('\n').trim()
  }

  // 如果都沒有，返回整個訊息（包括第一行）
  return message
}

// 載入逐字稿內容
const loadTranscriptionContent = async () => {
  try {
    loading.value = true
    error.value = ''

    const url = `https://listen-r2.bestian.tw/${meetingId.value}.txt`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const text = await response.text()

    // 按 \n{2,4} 分割內容
    transcriptionContent.value = text.split(/\n{2,4}/).filter(block => block.trim().length > 0)
  } catch (err) {
    console.error('載入逐字稿失敗:', err)
    error.value = '載入逐字稿失敗，請稍後再試'
  } finally {
    loading.value = false
  }
}

const getPhotoURL = (speaker: string) => {
  if (props.userData && props.userData.name == speaker.replace(/\s+/g, '')) {
    return props.userData.photoURL
  }
  return ''
}

const copyTranscriptionLink = (meetingId: string) => {
  const url = `https://listen.bestian.tw/transcription_detail/${meetingId}`
  navigator.clipboard.writeText(url)
  alert('連結已複製到剪貼簿')
}

// 組件掛載時載入數據
onMounted(() => {
  loadTranscriptionContent()
})
</script>

<style scoped>
/* 自定義樣式如果需要 */
</style>
