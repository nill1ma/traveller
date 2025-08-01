<template>
    <tr :data-testid="dataTestId" :class="className">
        <slot />
    </tr>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineOptions({ name: 'BaseTableRow' })
defineProps({
    dataTestId: {
        type: String as PropType<string>,
        required: true
    },
    className: {
        type: String as PropType<string>,
        required: false
    }
})
</script>
