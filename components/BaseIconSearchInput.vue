<script lang="ts" setup>
import { computedAsync, refDebounced } from '@vueuse/core'

const props = defineProps<{
    query: string
}>();

const BASE_API = 'https://api.iconify.design'
const SEARCH_ENDPOINT = '/search'

const currentQuery = ref (props.query)
const debouncedInput = refDebounced(currentQuery, 600)

const resp = computedAsync(async () => {
    const data = await $fetch(`${BASE_API}${SEARCH_ENDPOINT}`, {
        query: {
            query: debouncedInput.value,
            limit: '10'
        }
    })

    return data
}, 'test')

watchEffect(() => {
    currentQuery.value = props.query
})
</script>

<template>
    <div class="h-full w-full overflow-y-auto">
        <div v-for="each in resp.icons" class="w-full text-lg flex items-center even:bg-slate-50/5 h-fit gap-4">
            <Icon 
                :name="each" 
            />
            {{ each }}
        </div>  
    </div>
</template>