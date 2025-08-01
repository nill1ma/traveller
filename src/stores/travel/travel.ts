import { defineStore } from 'pinia'
import type { TableTravel } from '../../interfaces/travel'

export const useTravelStore = defineStore('travel', {
    state: () => ({
        travel: [
            {
                id: '1',
                status: 'planning',
                start_date: new Date("2026-02-27"),
                // end_date: new Date("2026-02-27"),
                location: 'Cataluña',
            },
            {
                id: '2',
                status: 'planning',
                start_date: new Date("2025-02-28"),
                // end_date: new Date("2026-02-27"),
                location: 'Recife',
            },
        ] as TableTravel[],
    }),
    actions: {
        addTravel(travel: TableTravel) {
            this.travel.push(travel)
        },
        removeTravel(id: string) {
            this.travel = this.travel.filter((travel) => travel.id !== id)
        },
        updateTravel(travelState: TableTravel) {
            this.travel = this.travel.map((travel) => travel.id === travelState.id ? travelState : travel)
        },
    },
    getters: {
        getTravel: (state) => state.travel,
    },
})
