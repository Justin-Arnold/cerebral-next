import { useStorage  } from "@vueuse/core"
import { set } from "zod"

export enum Wallpaper {
  WATERCOLOR = 'bg-[url(img/watercolor.webp)]',
  CHERRYBLOSSOM = 'bg-[url(img/cherryblossom.jpg)]'
}

export const useAppSettings = () => {
  const settings = useStorage<{wallpaper: string}>('cerebral-app-settings', {
    wallpaper: Wallpaper.WATERCOLOR
  })

  return settings
}