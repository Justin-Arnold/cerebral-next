<script lang="ts" setup>
import { Wallpaper } from '~/composables/useAppSettings';

const settings = useAppSettings()

const wallpaperSettings = ref(settings.value.wallpaper)

watch(wallpaperSettings, () => {
    settings.value.wallpaper = wallpaperSettings.value
})

</script>

<template>
    <div class="form-control w-1/2">
        <label class="flex flex-col gap-1">
            Background Image
            <select class="input select" v-model="wallpaperSettings">
                <option :value="Wallpaper.WATERCOLOR">Watercolor</option>
                <option :value="Wallpaper.CHERRYBLOSSOM">Cherry Blossom</option>
            </select>
        </label>
    </div>
</template>