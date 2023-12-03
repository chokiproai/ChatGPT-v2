import { computed } from 'vue'
import { enUS, viVN } from 'naive-ui'
import { useAppStore } from '@/store'
import { setLocale } from '@/locales'

export function useLanguage() {
  const appStore = useAppStore()

  const language = computed(() => {
    setLocale(appStore.language)
    switch (appStore.language) {
      case 'en-US':
        return enUS
      case 'vi-VN':
        return viVN
      default:
        return enUS
    }
  })

  return { language }
}