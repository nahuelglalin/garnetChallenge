import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, Text, View, Platform, ActivityIndicator } from 'react-native';
import { WeatherContext } from '../context/weather/WeatherContext';
import { useContext } from 'react';
import { toTitleCase } from '../helpers/toTitleCase';
import { useLocation } from '../hooks/useLocation';
import { weatherStyles } from '../theme/weatherTheme';


export const Weather = () => {

    const { data, getData, loading } = useContext(WeatherContext);

    const { hasLocation } = useLocation();

    useEffect(() => {
        if (hasLocation) {
            getData();
        }
    }, [hasLocation]);


    return (
        <>
            <View style={weatherStyles.container}>
                {
                    (loading) ?
                        <View style={weatherStyles.loading}>
                            <ActivityIndicator
                                size={50}
                                color="#fff"
                            />
                        </View>
                        :
                        <>
                            <Image
                                source={require('../assets/soleado.jpeg')}
                                style={Platform.OS === 'ios' ? weatherStyles.imageWeatherIOS : weatherStyles.imageWeather}
                            />
                            <View style={weatherStyles.locationContainer}>
                                <Icon
                                    name="location-outline"
                                    color="white"
                                    size={25}
                                />
                                <Text style={weatherStyles.location}>{data?.sys.country}</Text>
                            </View>

                            <Text style={weatherStyles.temperature}>{Math.trunc(data?.main.temp!)}°</Text>
                            <Text style={weatherStyles.feelsLike}>Sensasion térmica {Math.trunc(data?.main.feels_like!)}° </Text>

                            <Image
                                style={weatherStyles.image}
                                source={{ uri: `https://openweathermap.org/img/w/04n.png` }}
                            />

                            <Text style={weatherStyles.description}>{toTitleCase(data?.weather[0].description)}</Text>
                        </>
                }
            </View>
        </>
    )
}

