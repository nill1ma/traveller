<template>
    <header role="header" :data-testid="dataTestId" :class="`header-${theme} header`">
        <slot />
    </header>
</template>

<script setup lang="ts">
defineOptions({ name: 'HeaderComponent' })
import { useThemeStore } from '@/stores/theme/theme'
import './styles.css'
import { computed } from 'vue'

const themeStore = useThemeStore()
const theme = computed(() => themeStore.getTheme)

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
    }
})
</script>
