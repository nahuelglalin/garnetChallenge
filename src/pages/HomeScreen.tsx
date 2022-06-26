import React, { useContext } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Background } from '../components/Background';
import { Birras } from '../components/Birras';
import { Permissions } from '../components/Permissions';
import { Weather } from '../components/Weather';
import { AuthContext } from '../context/authentication/AuthContext';
import { PermissionsContext } from '../context/permissions/PermissionsContext';
import { ThemeContext } from '../context/theme/ThemeContext';

const HomeScreen = () => {

    const insets = useSafeAreaInsets();

    const { rol } = useContext(AuthContext);

    const { theme } = useContext(ThemeContext);

    const { permissions } = useContext(PermissionsContext);

    return (
        <Background>
            <StatusBar
                backgroundColor='#111'
                barStyle={(theme.currentTheme == 'dark') ? 'light-content' : 'dark-content'}
            />
            <ScrollView>
                <View style={{ marginTop: insets.top, ...styles.container }}>
                    <View>
                        {
                            (permissions.locationStatus != 'granted') ?
                                <Permissions /> :
                                <Weather />
                        }

                        {
                            (rol == 'admin') && <Birras />
                        }
                    </View>
                </View>
            </ScrollView>
        </Background>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginBottom: 300
    }
})