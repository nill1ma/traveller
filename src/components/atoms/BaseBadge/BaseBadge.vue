<template>
    <div :data-testid="dataTestId" :style="style" :class="['rounded-md text-center', className]">
        <slot />
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import './styles.css'
defineOptions({ name: 'BaseBadge' })
defineProps({
    dataTestId: {
        type: String as PropType<string>,
        required: true
    },
    style: {
        type: Object as PropType<Record<string, string>>,
        required: false
    },
    className: {
        type: String as PropType<string>,
        required: false
    }
})
</script>
