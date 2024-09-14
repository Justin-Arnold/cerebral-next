import { useStorage  } from "@vueuse/core"

export const useAppSettings = () => {
  const settings = useStorage<{wallpaper: string}>('cerebral-app-settings', {
    wallpaper: '/watercolor.webp'
  })

  return settings
}