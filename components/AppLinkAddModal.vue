<script lang="ts" setup>
import { z } from "zod"
import { toTypedSchema } from '@vee-validate/zod';
import { useStorage } from '@vueuse/core'
import BaseIconSearchInput from "./BaseIconSearchInput.vue";

const isOpen = defineModel()

const modal = ref<HTMLDialogElement>()

const addServiceValidationSchema = toTypedSchema(z.object({
    name: z.string().min(1, { message: 'This is required' }),
    address: z.string().min(1, { message: 'This is required' })
}))

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: addServiceValidationSchema,   
});

const [name, nameAttributes] = defineField('name');
const [address, addressAttributes] = defineField('address');

watchEffect(() => {
    if (isOpen.value) {
        openModal()
    } else if (!isOpen.value && !!modal.value) {
        closeModal()
    }
})

function openModal() {
    modal.value?.showModal()
}

function closeModal() {
    modal.value?.close()
}

const addService = handleSubmit(values => {
    const links = useStorage<{name: string, address: string}[]>('cerebral-link-items', [])
    links.value.push(values)
    closeModal()
});
</script>

<template>
    <dialog
        v-if="isOpen"
        ref="modal" 
        modal class="modal backdrop:bg-black/30 backdrop:backdrop-blur-md" 
        @close="isOpen = false"

    >
        <div class="modal-box relative">
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-bold">Add a new service</h3>
                <Icon 
                    name="mingcute:close-fill" 
                    class="text-lg"
                    @click="closeModal"
                />
            </div>
            <div class="modal-action">
                <form method="dialog" class="form-control w-full gap-6" @submit="addService">
                    <div>
                        <label class="flex flex-col gap-1">
                            Name
                            <input class="input input-primary" :class="{'input-error': !!errors.name?.length}" v-model="name" v-bind="nameAttributes" />
                        </label>
                        <div class="text-error">{{ errors.name }}</div>
                    </div>
                    <div>
                        <label class="flex flex-col gap-1">
                            Address
                            <input class="input input-primary" v-model="address" v-bind="addressAttributes"/>
                        </label>
                        <div>{{ errors.address }}</div>
                    </div>
                    <div>
                        <label>
                            Icon
                            <div class="input input-primary h-40">
                                <BaseIconSearchInput :query="name" />
                            </div>
                        </label>
                    </div>
                    <button class="btn btn-outline mt-2">
                        Add
                    </button>
                </form>
            </div>
        </div>
    </dialog>
</template>