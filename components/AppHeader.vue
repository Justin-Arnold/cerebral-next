<template>
    <CerebralHeader>
        <template #header-menu>
            <slot name="header-menu" />
        </template>
        <template #header-actions>
            <slot name="header-actions" />
        </template>
    </CerebralHeader>
</template>