import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    formContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        top: 80
    },
    title: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    },
    inputField: {
        color: "#fff",
        fontSize: 20,
        paddingVertical: 20,
    },
    inputFieldIos: {
        borderBottomColor: "rgba(255,255,255,0.3)",
        paddingVertical: 10,
        borderBottomWidth: 2,
        paddingBottom: 5,
        marginVertical: 5,
    },
    inputLight: {
        borderBottomColor: '#ccc',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        color: 'black',
        paddingHorizontal: 5,
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#111',
        borderRadius: 30,
        backgroundColor: '#246BFD',
        zIndex: 999
    },
    buttonText: {
        paddingVertical: 10,
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    newUserContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    newUserText: {
        color: "#decfad",
        fontSize: 16,
    },
    image: {
        height: 500,
        width: 700,
    }
})