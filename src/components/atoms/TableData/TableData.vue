<template>
    <td :data-testid="dataTestId" :class="className">
       <slot />
    </td>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
defineOptions({ name: 'TableData' })
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