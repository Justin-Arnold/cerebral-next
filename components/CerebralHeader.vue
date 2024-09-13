<template>
    <div class="fixed top-0 left-0 h-fit w-full p-4 z-[100]">
        <div class="navbar bg-base-300/80 rounded-lg items-center shadow-md px-4">
            <NuxtLink to="/" class="flex-1 flex gap-2">
                <Icon name="hugeicons:ai-brain-01" class="text-2xl text-primary"/>
                <a class="text-xl font-thin">Cerebral</a>
            </NuxtLink>
            <slot name="header-menu" />
        </div>
    </div>
</template>