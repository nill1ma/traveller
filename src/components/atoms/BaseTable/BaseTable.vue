<template>
    <table :data-testid="dataTestId" :class="className">
        <slot />
    </table>
</template>

<script setup lang="ts">
defineOptions({ name: 'BaseTable' })
defineProps({
    className: {
        type: String,
        required: false
    },
    dataTestId: {
        type: String,
        required: true
    }
})
</script>
