import { computed } from 'vue'
import { viVN, enUS } from 'naive-ui'
import { useAppStore } from '@/store'
import { setLocale } from '@/locales'

export function useLanguage() {
  const appStore = useAppStore()

  const language = computed(() => {
    switch (appStore.language) {
    case 'vi-VN':
        setLocale('vi-VN')
        return viVN
      case 'en-US':
        setLocale('en-US')
        return enUS
      default:
        setLocale('vi-VN')
        return viVN
    }
  })

  return { language }
}
