<script lang="ts" setup>
defineProps<{
    to: string
}>()
</script>

<template>
    <NuxtLink class="card bg-base-300/80 w-60 h-40 grid place-items-center shadow-md shadow-base-200" :to="to">
        <slot></slot>
    </NuxtLink>
</template>