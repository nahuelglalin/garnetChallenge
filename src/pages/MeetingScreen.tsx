import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Background } from '../components/Background'
import StartMeeting from '../components/StartMeeting';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

const MeetingScreen = () => {

    const insets = useSafeAreaInsets();

    const { theme } = useContext(ThemeContext);

    return (
        <Background>
            <StatusBar
                backgroundColor='#111'
                barStyle={(theme.currentTheme == 'dark') ? 'light-content' : 'dark-content'}
            />
            <View style={{ marginTop: insets.top + 20, ...styles.container }}>
                <Text style={{ ...styles.title, color: theme.colors.text }}>Meeting Room</Text>
                <StartMeeting />
            </View>
        </Background>
    )
}

export default MeetingScreen

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
    }
})