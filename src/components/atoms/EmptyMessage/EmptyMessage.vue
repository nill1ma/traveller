<template>
    <div :data-testid="dataTestId" :style="style">
        <slot />
    </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'EmptyMessage' })
defineProps({
    dataTestId: {
        type: String,
        required: true
    },
    style: {
        type: Object,
        required: false
    }
})
</script>
