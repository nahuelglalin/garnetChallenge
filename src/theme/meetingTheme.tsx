import { StyleSheet } from "react-native";

export const meetingStyles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 18,
        marginVertical: 5,
        color: '#fff',
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
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#246BFD',
    },
    buttonText: {
        paddingVertical: 10,
        color: "#fff",
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
})