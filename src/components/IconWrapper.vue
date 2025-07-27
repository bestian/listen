<template>
  <component
    :is="iconComponent"
    :size="size"
    :class="props.class"
  />
</template>

<script setup>
import { computed } from 'vue'
import * as LucideIcons from 'lucide-vue-next'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 24 },
  class: { type: String, default: '' }
})

const iconComponent = computed(() => {
  const iconName = props.name.charAt(0).toUpperCase() + props.name.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())

  // 添加調試信息
  if (import.meta.env.DEV) {
    console.log(`Icon lookup: "${props.name}" -> "${iconName}" -> ${iconName in LucideIcons ? 'found' : 'not found'}`)
  }

  return LucideIcons[iconName] || null
})
</script>
