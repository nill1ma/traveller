<template>
   <component :is="listType" role="list" :data-testid="dataTestId" :style="style" :class="className">
    <slot />
   </component>
</template>

<script setup lang="ts">
defineOptions({ name: 'CystomHTMLList' })
defineProps({
  dataTestId: {
    type: String,
    required: true
  },
  style: {
    type: Object,
    required: false
  },
  className: {
    type: String,
    required: false
  },
  listType: {
    type: String,
    default: 'ul',
    validator: (value: string) => ['ul', 'ol'].includes(value)
  }
})
</script>