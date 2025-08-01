<template>
    <BaseTable :className="'table'" :dataTestId="'TravellerData-Table'">
        <BaseTableHead :dataTestId="'TravellerData-TableHead'">
            <BaseTableRow :className="'table-row'" :dataTestId="'TravellerData-TableRow'">
                <BaseTableHeader :label="header" v-for="header in headers" :key="header" :dataTestId="`TravellerData-TableHeader-${header}`" />
            </BaseTableRow>
        </BaseTableHead>
        <BaseTableBody :dataTestId="'TravellerData-TableBody'">
            <BaseTableRow :className="'table-row'" v-for="item in data" :key="item.id" :dataTestId="'TravellerData-TableRow'">
                <BaseTableData :className="'table-data'" :dataTestId="'TravellerData-TableData'">
                    {{ item.location }}
                </BaseTableData>
                <BaseTableData :className="'table-data'" :dataTestId="'TravellerData-TableData'">
                    <BaseBadge :dataTestId="'TravellerData-TableData-Badge'" :style="{ width: 'fit-content', padding: '0.5rem', backgroundColor: LabelStatus[item.status as keyof typeof LabelStatus].backgroundColor, color: LabelStatus[item.status as keyof typeof LabelStatus].color }">
                        {{ LabelStatus[item.status as keyof typeof LabelStatus].label }}
                    </BaseBadge>
                </BaseTableData>
                <BaseTableData :className="'table-data'" :dataTestId="'TravellerData-TableData'">
                    {{ item.start_date.toUTCString() }}
                </BaseTableData>
                <BaseTableData :className="'table-data'" :dataTestId="'TravellerData-TableData'">
                    {{ item.end_date ?? '-' }}
                </BaseTableData>
                <BaseTableData :className="'table-data table-data-actions'" :dataTestId="'TravellerData-TableData'">
                    
                    <div style="cursor: pointer" @click="handleMenu(item.id)">
                        <v-icon name="md-menu" class="" />
                    </div>
                    <FloatMenu :listType="'ul'" v-if="menu === item.id" className="float-menu" :dataTestId="'TravellerData-TableData-Delete'">
                        <li>
                            <v-icon @click="removeTravel(item.id)" name="bi-trash3" class="trash-icon" /> delete
                        </li>
                        <li>
                            <v-icon @click="handleMenu(item.id)" name="fa-edit" class="" /> Edit
                        </li>
                    </FloatMenu>
                </BaseTableData>
            </BaseTableRow>
        </BaseTableBody>
    </BaseTable>
</template>

<script setup lang="ts">
import { ref, type PropType } from 'vue';
import { headers } from './conts';
import BaseTable from '@/components/atoms/BaseTable/BaseTable.vue';
import BaseTableHead from '@/components/atoms/BaseTableHead/BaseTableHead.vue';
import BaseTableRow from '@/components/atoms/BaseTableRow/BaseTableRow.vue';
import BaseTableHeader from '@/components/atoms/BaseTableHeader/BaseTableHeader.vue';
import BaseTableBody from '@/components/atoms/TableBody/TableBody.vue';
import BaseTableData from '@/components/atoms/TableData/TableData.vue';
import type { TableTravel } from '@/interfaces/travel';
import { LabelStatus } from '@/interfaces/status';
import BaseBadge from '@/components/atoms/BaseBadge/BaseBadge.vue';
import FloatMenu from '@/components/atoms/FloatMenu/FloatMenu.vue'
import "./styles.css"
defineOptions({ name: 'TravellerDataTable' })

const handleMenu = (id: string) => {
    if(menu.value === id)
        menu.value = ""
    else
        menu.value = id
}
const menu = ref("")

defineProps({
    data: {
        type: Array as PropType<TableTravel[]>,
        required: true
    },
    removeTravel: {
        type: Function as PropType<(id: string) => void>,
        required: true
    }
})
</script>