<script lang="ts" setup>
import type { Link } from '../types/Link'

const props = defineProps<{
    link: Link
}>()

const links = useAppLinks()

function onDeleteClick() {
    links.remove(props.link)
}

const formattedLink = computed(() => {
  let url = props.link.address;
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  return url;
});
</script>

<template>
    <NuxtLink class="card bg-base-300/80 w-60 h-40 shadow-md shadow-base-200 group" :to="formattedLink" target="_blank" rel="noopener">
        <div class="absolute top-0 left-0 h-full w-full grid place-items-center z-[1]">
            <slot></slot>
        </div>
        <div class="absolute top-0 left-0 h-fit w-full p-2 z-[2]">
            <span class="float-right hidden group-hover:inline" @click.prevent="onDeleteClick">
                <Icon name="mdi:trashcan-outline" class="text-2xl text-neutral hover:text-error"/>
            </span>
        </div>
    </NuxtLink>
</template>