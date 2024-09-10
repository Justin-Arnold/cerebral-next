<script setup lang="ts">
definePageMeta({
  layout: 'app'
})

const links = [
    {
        name: 'Test',
        url: 'https://www.link.com'
    }, {
        name: 'Test',
        url: 'https://www.link.com'
    }, {
        name: 'Test',
        url: 'https://www.link.com'
    }, {
        name: 'Test',
        url: 'https://www.link.com'
    }, {
        name: 'Test',
        url: 'https://www.link.com'
    }, {
        name: 'Test',
        url: 'https://www.link.com'
    }, {
        name: 'Test',
        url: 'https://www.link.com'
    }, {
        name: 'Test',
        url: 'https://www.link.com'
    },
]
</script>

<template>
    <AppLinkCard v-for="each, index in links" :key="index" :to="each.url">
        {{ each.name }}
    </AppLinkCard>
</template>