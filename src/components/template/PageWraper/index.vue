<template>
    <div role="content" :data-testid="'page-base'" :style="style" :class="'container'">
        <HeaderComponent :dataTestId="'page-base-header'">
            <span>Header</span>
            <BaseBadge :dataTestId="'page-base-header-badge'" :className="'badge'">
                <v-icon :class="{ 'sun' : true }" name="bi-sun" @click="themeStore.setTheme('light')" scale="1.5"/>
                <v-icon :class="{ 'moon' : true }" name="bi-moon" @click="themeStore.setTheme('dark')" scale="1.5"/>
            </BaseBadge>
        </HeaderComponent>
        <SidebarComponent :dataTestId="'page-base-sidebar'" :className="'sidebar'" />
        <div :dataTestId="'page-base-content'" :className="`content-${theme} content`">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import "./styles.css"
import HeaderComponent from '@/components/organisms/HeaderComponent/HeaderComponent.vue'
import SidebarComponent from '@/components/organisms/SidebarComponent/index.vue'
import BaseBadge from "@/components/atoms/BaseBadge/BaseBadge.vue"
import { useThemeStore } from '@/stores/theme/theme'
import { computed } from 'vue'
defineOptions({ name: 'PageWraper' })
defineProps({
    style: {
        type: Object,
        required: false
    }
})

const themeStore = useThemeStore()
const theme = computed(() => themeStore.getTheme)

</script>