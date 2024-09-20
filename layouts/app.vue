<script lang="ts" setup>
import { useStorage } from '@vueuse/core'
import { Wallpaper } from '~/composables/useAppSettings';

const links = useStorage<{name: string, address: string}[]>('cerebral-link-items', [])
const hasLinks = computed(() => !!links.value.length)


const settings = useAppSettings()     
const wallpaper = computed(() => settings.value.wallpaper)
</script>

<template>
    <ClientOnly>
        <div class="absolute top-0 left-0 w-screen h-screen bg-cover blur" :class="wallpaper" />
    </ClientOnly>
    
    
    <div class="absolute top-0 left-0 z-2 w-screen h-screen overflow-hidden p-4 flex flex-col gap-4">
        <AppHeader>
            <template #header-menu>
                <NuxtLink to="/app" class="btn btn-ghost" active-class="text-primary">App</NuxtLink>
                <NuxtLink to="/settings" class="btn btn-ghost" active-class="text-primary">Settings</NuxtLink>
            </template>
            <template #header-actions>
                <AppLinkAddButton v-if="hasLinks" isGhost/>
            </template>
        </AppHeader>
        <div class="h-full w-full overflow-auto">
            <slot />
        </div>
    </div>
</template>