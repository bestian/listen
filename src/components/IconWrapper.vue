<template>
  <component :is="iconComponent" :size="size" :class="iconClass" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import * as LucideIcons from 'lucide-vue-next'

interface Props {
  name: string
  size?: number | string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 24,
  class: ''
})

const iconComponent = computed(() => {
  const iconName = props.name.charAt(0).toUpperCase() + props.name.slice(1)
  return LucideIcons[iconName as keyof typeof LucideIcons] || LucideIcons.HelpCircle
})

const iconClass = computed(() => props.class)
</script>
