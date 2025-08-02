<template>
    <input 
    :data-testid="dataTestId" 
    @input="$emit('update:inputValue', ($event.target as HTMLInputElement)?.value)" 
    :value="inputValue" 
    :placeholder="placeholder" 
    :style="style"
    :class="className"
    />
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

defineOptions({ name: 'BaseInput' })
defineProps({
    inputValue: {
        type: String as PropType<string>,
        required: true
    },
    placeholder: {
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
    className: {
        type: String as PropType<string>,
        required: false
    }
})
defineEmits(['update:inputValue'])
</script>