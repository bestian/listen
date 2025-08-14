<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ t('navigation.home') }}</h1>
      <p class="text-xl text-gray-600 mb-8">
        {{ t('footer.description') }}
      </p>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('meeting.videoConference') }}</h3>
          <p class="text-gray-600 mb-4 text-left">
            {{ t('meeting.videoConferenceDesc') }}
          </p>
          <RouterLink
            to="/meeting"
            class="inline-block px-6 py-3 bg-jade-green text-white rounded-lg hover:bg-jade-green/90 transition-colors"
          >
            {{ t('meeting.startMeeting') }}
          </RouterLink>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ t('meeting.transcriptManagement') }}</h3>
          <p class="text-gray-600 mb-4 text-left">
            {{ t('meeting.transcriptManagementDesc') }}
          </p>
          <RouterLink
            to="/transcription"
            class="inline-block px-6 py-3 bg-democratic-red text-white rounded-lg hover:bg-democratic-red/90 transition-colors"
          >
            {{ t('meeting.manageTranscripts') }}
          </RouterLink>
        </div>
      </div>

      <div class="bg-gray-50 p-8 rounded-lg">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ t('meeting.features') }}</h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-jade-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ t('meeting.highQualityVideo') }}</h3>
            <p class="text-gray-600">{{ t('meeting.highQualityVideoDesc') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-democratic-red rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ t('meeting.realTimeRecording') }}</h3>
            <p class="text-gray-600">{{ t('meeting.realTimeRecordingDesc') }}</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ t('meeting.oneClickExport') }}</h3>
            <p class="text-gray-600">{{ t('meeting.oneClickExportDesc') }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
