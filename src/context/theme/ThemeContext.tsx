import React, { createContext, useReducer } from "react";
import { darkTheme, themeReducer, ThemeState } from './ThemeReducer';

//Interfaz de mi Context
export interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);


export const ThemeProvider = ({children}: any) => {

   const [theme, dispatch] = useReducer( themeReducer , darkTheme );
   
    const setDarkTheme = () => {
        dispatch({type: 'SET_DARK_THEME'});
    }

    const setLightTheme = () => {
        dispatch({type: 'SET_LIGHT_THEME'});
    }

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                setDarkTheme: setDarkTheme,
                setLightTheme: setLightTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}