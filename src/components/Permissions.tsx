import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { PermissionsContext } from '../context/permissions/PermissionsContext';

export const Permissions = () => {

    const {askLocationPermission} = useContext(PermissionsContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You need to enable location to show weather</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={askLocationPermission}
            >
            <Text style={styles.buttonText}>Enable</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        borderColor: '#111',
        borderRadius: 30,
        backgroundColor: '#246BFD',
        marginBottom: 10
    },
    buttonText: {
        paddingVertical: 10,
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
})
