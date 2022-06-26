import { StyleSheet } from "react-native";


export const weatherStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 20,
    },
    imageWeather: {
        position: 'absolute',
        height: 300,
        width: 380,
        borderRadius: 20,
        opacity: 0.9
    },
    imageWeatherIOS: {
        position: 'absolute',
        height: 260,
        width: 330,
        borderRadius: 20,
        opacity: 0.9
    },
    temperature: {
        fontSize: 100,
        color: '#fff'
    },
    description: {
        fontSize: 25,
        color: '#fff'
    },
    feelsLike: {
        fontSize: 20,
        color: 'rgba(255,255,255,0.6)'
    },
    location: {
        fontSize: 22,
        color: '#fff'
    },
    image: {
        height: 50,
        width: 50,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        right: 10
    },
    loading: {
    }
})