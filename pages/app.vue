<script setup lang="ts">
import { useStorage } from '@vueuse/core'

definePageMeta({
  layout: 'app'
})


const links = useStorage<{name: string, address: string}[]>('cerebral-link-items', [])
const hasLinks = computed(() => links.value.length)
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 h-full w-full">
        <AppLinkCard v-for="each, index in links" :key="index" :to="each.address">
            {{ each.name }}
        </AppLinkCard>
        <div v-if="!hasLinks" class="fixed top-0 left-0 h-screen w-screen grid place-items-center">
            <AppLinkAddButton />
        </div>
    </div>
</template>