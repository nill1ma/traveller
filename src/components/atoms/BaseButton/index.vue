<template>
    <button :data-testid="dataTestId" :style="style" @click="onClick">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import "./styles.css"

defineOptions({ name: 'BaseButton' })
defineProps({
    label: {
        type: String as PropType<string>,
        required: true
    },
    dataTestId: {
        type: String as PropType<string>,
        required: true
    },
    style: {
        type: Object as PropType<Record<string, string>>,
        required: false
    },
    onClick: {
        type: Function as PropType<(event: MouseEvent) => void>,
        required: false
    }
})

</script>