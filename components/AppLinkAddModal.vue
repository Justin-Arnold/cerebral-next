<script lang="ts" setup>
const isOpen = defineModel()

const modal = ref()

watchEffect(() => {
    if (isOpen.value) {
        openModal()
    } else if (!isOpen.value && !!modal.value) {
        closeModal()
    }
})

function openModal() {
    modal.value.showModal()
}

function closeModal() {
    modal.value.closeModal()
}
</script>
<template>
    <dialog ref="modal" modal class="modal backdrop:bg-black/30 backdrop:backdrop-blur-md" @close="isOpen = false" >
        <div class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
            </div>
        </div>
    </dialog>
</template>