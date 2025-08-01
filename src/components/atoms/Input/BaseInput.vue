<template>
    <input :data-testid="dataTestId" @change="onChange" :value="value" :placeholder="placeholder" :style="style">
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineOptions({ name: 'BaseInput' })
defineProps({
    value: {
        type: String as PropType<string>,
        required: true
    },
    placeholder: {
        type: String as PropType<string>,
        required: true
    },
    onChange: {
        type: Function as PropType<(event: Event) => void>,
        required: true
    },
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