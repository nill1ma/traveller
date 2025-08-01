import { defineStore } from "pinia";
import { getTheme, saveTheme, type ThemeType } from "../../utils/theme";

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: getTheme()
    }),
    actions: {
        setTheme(theme: ThemeType) {
            this.theme = theme
            saveTheme(theme)
        }
    },
    getters: {
        getTheme: (state) => state.theme
    }
})