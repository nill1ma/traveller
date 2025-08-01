<template>
    <View :data-testid="dataTestId" :style="viewStyle">
        <BaseInputLabel :label="label" />
        <BaseInput :value="value" :label="label" :onChange="onChange" :style="style" />
    </View>
</template>

<script setup lang="ts">

import type { PropType } from 'vue';

defineOptions({ name: 'FormControl' })
defineProps({
    label: {
        type: String as PropType<string>,
        required: true
    },
    dataTestId: {
        type: String as PropType<string>,
        required: true
    },
    value: {
        type: String as PropType<string>,
        required: true
    },
    onChange: {
        type: Function as PropType<(event: Event) => void>,
        required: true
    },
    style: {
        type: Object as PropType<Record<string, string>>,
        required: false
    },
    viewStyle: {
        type: Object as PropType<Record<string, string>>,
        required: false
    }
})
</script>
