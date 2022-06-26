import React, { useContext } from 'react';
import HomeScreen from '../pages/HomeScreen';
import MeetingScreen from '../pages/MeetingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { SettingsScreen } from '../pages/SettingsScreen';
import { ThemeContext } from '../context/theme/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <NavigationContainer
            independent={true}
            theme={theme}
        >
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarActiveTintColor: '#246BFD',
                    tabBarStyle: {
                        backgroundColor: (theme.currentTheme == 'dark') ? "#181926" : '#fff',
                        borderTopWidth: 0,
                        elevation: 0
                    },
                    tabBarLabelStyle: {
                        fontSize: 1,
                        color: "#181926",
                    },
                    tabBarIcon: ({ color, focused, size }) => {

                        let icon: any = '';

                        switch (route.name) {
                            case 'HomeScreen':
                                icon = "home-outline"
                                break;
                            case 'MeetingScreen':
                                icon = "videocam-outline"
                                break;
                            case 'SettingsScreen':
                                icon = "settings-outline"
                                break;
                        }

                        return <Icon
                            name={icon}
                            color={color}
                            size={34}
                        />

                    }
                })}
            >
                <Tab.Screen name="HomeScreen" options={{ title: 'Home', headerShown: false }} component={HomeScreen} />
                <Tab.Screen name="MeetingScreen" options={{ title: 'Meet' }} component={MeetingScreen} />
                <Tab.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
