import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { calcularBirras } from '../helpers/calcularBirras';
import { useForm } from '../hooks/useForm';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';
import { WeatherContext } from '../context/weather/WeatherContext';
import { weatherStyles } from '../theme/weatherTheme';

export const Birras = () => {

    const [cantidadCajones, setCantidadCajones] = useState(0);

    const { data, loading } = useContext(WeatherContext);

    const { theme } = useContext(ThemeContext);

    const { form, onChange } = useForm({
        personas: ''
    });

    useEffect(() => {
        if (form.personas == '' || form.personas == null) {
            setCantidadCajones(0);
        } else {
            let calc = calcularBirras(parseInt(form.personas), data?.main.temp!);
            setCantidadCajones(calc);
        }
    }, [form.personas])

    return (
        <>
            <Text style={{ ...styles.inputLabel, color: theme.colors.text }}>Calculate beer crates</Text>
            {
                (loading) ?
                    <View style={weatherStyles.loading}>
                        <ActivityIndicator
                            size={50}
                            color="#fff"
                        />
                    </View>
                    :
                    <TextInput
                        style={(theme.currentTheme == 'light') ? styles.textInputLight : styles.textInput}
                        placeholder='Number of guests..'
                        placeholderTextColor='#777'
                        keyboardType='numeric'
                        onChangeText={(value) => onChange(value, 'personas')}
                    />
            }
            {
                (cantidadCajones != 0) &&
                (
                    <View style={styles.container}>

                        <Text style={{ ...styles.text, color: theme.colors.text }}>You need {cantidadCajones} crates</Text>
                        <Icon
                            name="beer-outline"
                            color={theme.colors.text}
                            size={35}
                        />
                    </View>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20
    },
    inputLabel: {
        fontSize: 25,
        margin: 5,
        fontWeight: 'bold',
        color: '#fff'
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 8,
        marginTop: 20,
        fontSize: 20
    },
    textInputLight: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        padding: 8,
        marginTop: 20,
        fontSize: 20
    },
    text: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center'
    },
})
