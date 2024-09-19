<script setup lang="ts">
definePageMeta({
  layout: 'app'
})

const useLinks = useAppLinks()
const links = computed(() => useLinks.links.value)
const hasLinks = computed(() => links.value.length)
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 h-full w-full auto-rows-max">
        <AppLinkCard v-for="each, index in links" :key="index" :link="each">
            {{ each.name }}
        </AppLinkCard>
        <div v-if="!hasLinks" class="fixed top-0 left-0 h-screen w-screen grid place-items-center">
            <AppLinkAddButton />
        </div>
    </div>
</template>