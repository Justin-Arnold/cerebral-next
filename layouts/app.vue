<script lang="ts" setup>
import { useStorage } from '@vueuse/core'

const links = useStorage<{name: string, address: string}[]>('cerebral-link-items', [])
const hasLinks = computed(() => !!links.value.length)

</script>

<template>
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
</template>