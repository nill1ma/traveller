<template>
    <th :data-testid="dataTestId" :style="style">
        {{ label }}
    </th>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineOptions({ name: 'BaseTableHeader' })
defineProps({
    dataTestId: {
        type: String as PropType<string>,
        required: true
    },
    label: {
        type: [String, Number] as PropType<string | number>,
        required: true
    },
    style: {
        type: Object as PropType<Record<string, string>>,
        required: false
    }
})
</script>
