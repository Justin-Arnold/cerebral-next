<script lang="ts" setup>
import { useStorage } from '@vueuse/core'

const links = useStorage<{name: string, address: string}[]>('cerebral-link-items', [])
const hasLinks = computed(() => !!links.value.length)

const settings = useAppSettings()        
</script>

<template>
    <div class="absolute top-0 left-0 w-screen h-screen bg-[url('/img/watercolor.webp')] bg-cover blur">
        <!-- <NuxtPicture format="webp" :src="'/watercolor.webp'" height="10000px"/> -->
    </div>
    
    <div class="absolute top-0 left-0 z-2 w-screen h-screen">
        <AppHeader>
            <template #header-menu>
                <AppLinkAddButton v-if="hasLinks" isGhost/>
                <div>|</div>
                <NuxtLink to="/settings" class="btn btn-ghost">Settings</NuxtLink>
            </template>
        </AppHeader>
        <div class="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            <slot />
        </div>
    </div>
</template>