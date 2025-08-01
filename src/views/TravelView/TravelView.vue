<template>
    <TravellerDataTable 
    :removeTravel="travelStore.removeTravel"
    :data="data"
    />
</template>

<script setup lang="ts">
import TravellerDataTable from '@/components/organisms/TravellerDataTable/TravellerDataTable.vue';
import { useTravelStore } from '@/stores/travel/travel';
import { computed } from 'vue';
defineOptions({ name: 'TravelView' })

const travelStore = useTravelStore()

const data = computed(() => travelStore.travel)

</script>

<style scoped>
</style>
