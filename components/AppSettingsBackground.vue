<script lang="ts" setup>

const settings = useAppSettings()

const wallpaperSettings = ref(settings.value.wallpaper)

watch(wallpaperSettings, () => {
    settings.value.wallpaper = wallpaperSettings.value
    console.log(settings.value.wallpaper)
})

</script>

<template>
    <div class="form-control w-1/2">
        <label class="flex flex-col gap-1">
            Background Image
            <select class="input select" v-model="wallpaperSettings">
                <option value="/watercolor.webp">Watercolor</option>
                <option value="/cherryblossom.jpg">Cherry Blossom</option>
            </select>
        </label>
    </div>
</template>