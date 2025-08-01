<template>
    <thead :data-testid="dataTestId" :style="style">
        <slot />
    </thead>
</template>

<script setup lang="ts">

import type { PropType } from 'vue'

defineOptions({ name: 'BaseTableHead' })
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