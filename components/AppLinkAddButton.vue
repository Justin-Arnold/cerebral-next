<script lang="ts" setup>

defineProps<{
    isGhost?: boolean
}>()

const isOpen = ref(false)

</script>

<template>
    <button class="btn text-primary bg-neutral/80 rounded-full aspect-square" :class="{'btn-ghost': isGhost}" @click="isOpen = true">
        <Icon name="mingcute:add-fill" class="text-xl"/>
    </button>
    <AppLinkAddModal v-model="isOpen"/>
</template>