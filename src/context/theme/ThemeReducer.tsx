import { Theme } from "@react-navigation/native"

type ThemeAction = {type: 'SET_LIGHT_THEME'} | {type: 'SET_DARK_THEME'};

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'rgba(0, 0, 0, 0.7)',
    dark: false,
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dividerColor: 'rgba(0, 0, 0, 0.7)',
    dark: true,
    colors: {
        primary: '#75CEDB',
        background: '#111',
        card: 'black',
        text: 'white',
        border: 'white',
        notification: 'teal',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    
    switch (action.type) {
        case 'SET_LIGHT_THEME':
            return {
                ...lightTheme
            }
        case 'SET_DARK_THEME':
            return {
                ...darkTheme
            }
        default:
            return state;
    }

}