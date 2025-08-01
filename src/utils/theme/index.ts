export const saveTheme = (theme: ThemeType) => {
    localStorage.setItem('theme', theme)
}

export const getTheme = (): ThemeType => {
    return localStorage.getItem('theme') as ThemeType || 'light'
}

export type ThemeType = 'light' | 'dark'