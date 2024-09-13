<script lang="ts" setup>

defineProps<{
    isGhost?: boolean
}>()

const isOpen = ref(false)

</script>

<template>
    <button class="btn text-primary" :class="{'btn-ghost': isGhost}" @click="isOpen = true">
            Add New Service
    </button>
    <AppLinkAddModal v-model="isOpen"/>
</template>