<script setup lang="ts">
import { useStorage } from '@vueuse/core'

definePageMeta({
  layout: 'app'
})

const isOpen = ref(false)

const links = useStorage<{name: string, url: string}[]>('cerebral-link-items', [])
const hasLinks = computed(() => links.value.length)
</script>

<template>
    <AppLinkCard v-for="each, index in links" :key="index" :to="each.url">
        {{ each.name }}
    </AppLinkCard>
    <div v-if="!hasLinks" class="fixed top-0 left-0 h-screen w-screen grid place-items-center">
        <div class="btn text-primary" @click="isOpen = true">
            Add New Service
        </div>
    </div>
    <AppLinkAddModal v-model="isOpen"/>
</template>