import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { AuthProvider } from './src/context/authentication/AuthContext';
import { ThemeProvider } from './src/context/theme/ThemeContext';
import { WeatherProvider } from './src/context/weather/WeatherContext';
import { PermissionsProvider } from './src/context/permissions/PermissionsContext';

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <Navigator />
            </AppState>
        </NavigationContainer>
    )
}


const AppState = ({ children }: any) => {
    return (
        <AuthProvider>
            <PermissionsProvider>
                <WeatherProvider>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </WeatherProvider>
            </PermissionsProvider>
        </AuthProvider>
    )
}

export default App;
