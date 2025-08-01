<template>
    <component :is="ListType[listType]" :data-testid="dataTestId" :class="`float-menu ${className}`">
        <slot />
    </component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
const ListType = {
    'ul': 'ul',
    'ol': 'ol'
}
defineOptions({ name: 'FloatMenu' })
defineProps({
    dataTestId: {
        type: String as PropType<string>,
        required: true
    },
    className: {
        type: String as PropType<string>,
        required: false
    },
    listType: {
        type: String as PropType<'ul' | 'ol'>,
        required: false,
        default: 'ul'
    }
})
</script>