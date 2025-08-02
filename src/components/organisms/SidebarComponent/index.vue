<template>
    <aside @mouseover="toggleSidebar" @mouseout="toggleSidebar" role="sidebar" :data-testid="dataTestId" :class="`sidebar-${theme} sidebar`">
        <CystomHTMLList @mouseover="true" @mouseout="false" :dataTestId="'sidebar-list'" listType="ul" :className="listClassName">
            <RouterLink v-for="route in CONFIG_ROUTES" :key="route.label" :to="route.path">
                <CystomHTMLListItem :dataTestId="'sidebar-item-travels'" :className="listItemClassName">
                    <span>
                        <font-awesome-icon :icon="route.icon" size="1x" /> 
                        <span v-if="isCollapsed">
                            {{ route.label }}
                        </span>
                    </span>
                </CystomHTMLListItem>
            </RouterLink>
        </CystomHTMLList>
    </aside>
</template>

<script setup lang="ts">
defineOptions({ name: 'SidebarComponent' })
import CystomHTMLList from '@/components/atoms/CystomHTMLList/index.vue'
import CystomHTMLListItem from '@/components/atoms/CystomHTMLListItem/inde.vue'
import { CONFIG_ROUTES } from '@/router/constants'
import { useThemeStore } from '@/stores/theme/theme'
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './styles.css'

const isCollapsed = ref(false);

const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
};

defineProps({
    dataTestId: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: false
    },
    listClassName: {
        type: String,
        required: false
    },
    listItemClassName: {
        type: String,
        required: false
    }
})

const themeStore = useThemeStore()
const theme = computed(() => themeStore.getTheme)
</script>