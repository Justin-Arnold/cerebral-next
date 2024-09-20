<template>
    <div class="h-fit w-full z-[100]">
        <div class="navbar bg-base-300/80 rounded-lg items-center shadow-md px-4">
            <div>
                <NuxtLink to="/" class="flex-1 flex gap-2">
                    <Icon name="hugeicons:ai-brain-01" class="text-2xl text-primary"/>
                    <a class="text-xl font-thin">Cerebral</a>
                </NuxtLink>
            </div>
            <div class="grow flex justify-center">
                <slot name="header-menu" />
            </div>
            <div class="float-right">
                <slot name="header-actions" />
            </div>
        </div>
    </div>
</template>