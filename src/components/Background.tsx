import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const Background = ({children}: Props) => {

    const {theme} = useContext(ThemeContext);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'blue',
            }}
        >
            <LinearGradient 
                colors={ (theme.currentTheme == 'dark') ? ['#050607', "#181926"] : ['#fff', '#fff']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.9, y: 1}}
            />
            {children}
        </View>
    )
}
