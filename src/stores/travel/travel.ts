import { defineStore } from 'pinia'
import type { TableTravel } from '../../interfaces/travel'

interface TravelState {
  travel: TableTravel[]
  filteredTravels: TableTravel[]
}

export const useTravelStore = defineStore('travel', {
    state: (): TravelState => ({
        travel: [
            {
                id: '1',
                status: 'planning',
                start_date: new Date("2026-02-27"),
                location: 'Cataluña',
                category: 'vacation'
            },
            {
                id: '2',
                status: 'planning',
                start_date: new Date("2025-02-28"),
                location: 'Recife',
                category: 'business'
            },
        ],
        filteredTravels: []
    }),
    actions: {
        addTravel(travel: TableTravel) {
            this.travel.push(travel)
            this.filter('') // Re-apply current filter when new travel is added
        },
        removeTravel(id: string) {
            this.travel = this.travel.filter((travel) => travel.id !== id)
            this.filter('') // Re-apply current filter when travel is removed
        },
        updateTravel(travelState: TableTravel) {
            this.travel = this.travel.map((travel) => 
                travel.id === travelState.id ? travelState : travel
            )
            this.filter('') // Re-apply current filter when travel is updated
        },
        filter(searchTerm: string) {
            if (!searchTerm.trim()) {
                this.filteredTravels = [...this.travel]
                return
            }
            
            const term = searchTerm.toLowerCase()
            this.filteredTravels = this.travel.filter((travel) => {
                return (
                    travel.location?.toLowerCase().includes(term) ||
                    travel.status?.toLowerCase().includes(term) ||
                    travel.category?.toLowerCase().includes(term)
                )
            })
        }
    },
    getters: {
        getTravel: (state) => state.travel,
        getFilteredTravels: (state) => state.filteredTravels
    },
    // Initialize filteredTravels with all travels
    hydrate(state) {
        state.filteredTravels = [...state.travel]
    }
})
