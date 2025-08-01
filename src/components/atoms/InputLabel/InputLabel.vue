<template>
    <label :data-testid="dataTestId" :style="style">{{ label }}</label>
</template>
    
<script setup lang="ts">

import type { PropType } from 'vue'

defineOptions({ name: 'InputLabel' })
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
    }
})
</script>
