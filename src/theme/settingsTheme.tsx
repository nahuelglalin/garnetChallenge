import { StyleSheet } from "react-native";

export const settingsStyles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 20
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    label: {
        color: '#fff',
        fontSize: 20,
        marginTop: 20,
    },
    value: {
        color: '#fff',
        opacity: 0.5,
        fontSize: 15
    },
    switchSection: {
        flexDirection: 'row',
        marginTop: 22,
        justifyContent: 'space-between'
    },
    logout: {
        marginTop: 22,
        backgroundColor: "#246BFD",
        paddingVertical: 5,
        borderRadius: 15,
        alignItems: 'center'
    },
    logoutText: {
        color: '#fff',
        fontSize: 20,
    }
})