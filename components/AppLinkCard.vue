<script lang="ts" setup>
import type { Link } from '../types/Link'

const props = defineProps<{
    link: Link
}>()

const links = useAppLinks()

function onDeleteClick() {
    links.remove(props.link)
}
</script>

<template>
    <NuxtLink class="card bg-base-300/80 w-60 h-40 shadow-md shadow-base-200 group" :to="link.address">
        <div class="absolute top-0 left-0 h-full w-full grid place-items-center z-[1]">
            <slot></slot>
        </div>
        <div class="absolute top-0 left-0 h-fit w-full p-2 z-[2]">
            <span class="float-right text-error hidden group-hover:inline hover:scale-110" @click.prevent="onDeleteClick">
                T
            </span>
        </div>
    </NuxtLink>
</template>