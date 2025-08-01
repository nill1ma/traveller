<template>
    <li role="listitem" :data-testid="dataTestId" :style="style" :class="className">
        <slot />
    </li>
</template>

<script setup lang="ts">
defineOptions({ name: 'CystomHTMLListItem' })
defineProps({
    dataTestId: {
        type: String,
        required: true
    },
    style: {
        type: Object,
        required: false
    },
    className: {
        type: String,
        required: false
    }
})
</script>