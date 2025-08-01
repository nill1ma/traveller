<template>
    <tbody :data-testid="dataTestId" :style="style">
        <slot />
    </tbody>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineOptions({ name: 'TableBody' })
defineProps({
    dataTestId: {
        type: String as PropType<string>,
        required: true
    },
    style: {
        type: Object as PropType<Record<string, string>>,
        required: false
    }
})
</script>
