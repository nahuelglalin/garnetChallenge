import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import { LoginScreen } from '../pages/LoginScreen';
import { AuthContext } from '../context/authentication/AuthContext';

const Stack = createStackNavigator();

export const Navigator = () => {

    const { rol } = useContext(AuthContext);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#111'
                }
            }}
        >
            {
                ((rol === 'admin' || rol === 'user')) ?
                    <Stack.Screen name="Tabs" component={Tabs} />
                    :
                    <Stack.Screen name="PermissionsScreen" component={LoginScreen} />
            }
        </Stack.Navigator>
    );
}