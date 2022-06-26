import React, { useContext, useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Background } from '../components/Background'
import { CustomSwitch } from '../components/CustomSwitch';
import { AuthContext } from '../context/authentication/AuthContext';
import { ThemeContext } from '../context/theme/ThemeContext';
import { toTitleCase } from '../helpers/toTitleCase';
import { useLocation } from '../hooks/useLocation';
import { settingsStyles } from '../theme/settingsTheme';

export const SettingsScreen = () => {

    const { setLightTheme, setDarkTheme, theme } = useContext(ThemeContext);

    const { rol, signOut } = useContext(AuthContext);

    const { userLocation } = useLocation();

    const insets = useSafeAreaInsets();

    const [state, setState] = useState({
        darkModeOn: (theme.currentTheme == 'dark') ? true : false,
        notificationsOn: false
    });

    const { darkModeOn, notificationsOn } = state;

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value
        });
    }

    useEffect(() => {
        if (state.darkModeOn == false) {
            setLightTheme();
        } else {
            setDarkTheme();
        }
    }, [state])


    return (
        <Background>
            <StatusBar
                backgroundColor='#111'
                barStyle={(theme.currentTheme == 'dark') ? 'light-content' : 'dark-content'}
            />

            <View style={{ marginTop: insets.top + 20, ...settingsStyles.container }}>

                <Text style={{ ...settingsStyles.title, color: theme.colors.text }}>Settings</Text>

                <View style={settingsStyles.imageContainer}>
                    <Image
                        source={require('../assets/profile_user.jpeg')}
                        style={settingsStyles.image}
                    />
                </View>

                <Text style={{ ...settingsStyles.label, color: theme.colors.text }}>Name</Text>
                <Text style={{ ...settingsStyles.value, color: theme.colors.text }}>Nahuel</Text>

                <Text style={{ ...settingsStyles.label, color: theme.colors.text }}>LastName</Text>
                <Text style={{ ...settingsStyles.value, color: theme.colors.text }}>Lalin</Text>

                <Text style={{ ...settingsStyles.label, color: theme.colors.text }}>Role</Text>
                <Text style={{ ...settingsStyles.value, color: theme.colors.text }}>{toTitleCase(rol)}</Text>

                <Text style={{ ...settingsStyles.label, color: theme.colors.text }}>Email</Text>
                <Text style={{ ...settingsStyles.value, color: theme.colors.text }}>nahuelglalin@gmail.com</Text>

                <Text style={{ ...settingsStyles.label, color: theme.colors.text }}>Location</Text>
                <Text style={{ ...settingsStyles.value, color: theme.colors.text }}>Lat: {userLocation.latitude}</Text>
                <Text style={{ ...settingsStyles.value, color: theme.colors.text }}>Lon: {userLocation.latitude}</Text>

                <View style={settingsStyles.switchSection}>
                    <Text style={{ color: theme.colors.text, fontSize: 20 }}>Dark Mode</Text>
                    <CustomSwitch isOn={darkModeOn} onChange={(value) => onChange(value, 'darkModeOn')} />
                </View>

                <View style={settingsStyles.switchSection}>
                    <Text style={{ color: theme.colors.text, fontSize: 20 }}>Enable Notifications</Text>
                    <CustomSwitch isOn={notificationsOn} onChange={(value) => onChange(value, 'notificationsOn')} />
                </View>

                <TouchableOpacity
                    onPress={signOut}
                    style={settingsStyles.logout}
                >
                    <Text style={settingsStyles.logoutText}>Logout</Text>
                </TouchableOpacity>

            </View>
        </Background>
    )
}
