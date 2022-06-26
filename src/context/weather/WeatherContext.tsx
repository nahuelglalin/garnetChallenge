import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "../../hooks/useLocation";
import { WeatherResponse } from "../../interfaces/WeatherResponse";

interface WeatherState {
    data: WeatherResponse | undefined;
    loading: boolean;
    getData: () => void;
}

const params = {
    lat: '0',
    lon: '0',
    id: '2172797',
    lang: 'sp',
    units: 'metric',
    mode: 'json'
}

const optionsHttp = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params,
    headers: {
        'X-RapidAPI-Key': '6193bcf383mshb6f67f53b595246p107deajsnb627723a19ef',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
}

export const WeatherContext = createContext({} as WeatherState);

export const WeatherProvider = ({ children }: any) => {


    const [data, setData] = useState<WeatherResponse>();
    const [loading, setLoading] = useState(true);

    const { hasLocation, userLocation } = useLocation();

    //Setear la location del user en los params del HttpRequest
    useEffect(() => {
        if (hasLocation) {
            params.lat = userLocation.latitude.toString();
            params.lon = userLocation.longitude.toString();
        }
    }, [hasLocation]);


    //Para obtener la data del clima
    const getData = async () => {
        await axios.request(optionsHttp).then(response => {

            const data = response.data
            console.log(JSON.stringify(data, null, 2));
            setData(response.data);
            setLoading(false);

        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <WeatherContext.Provider
            value={{
                data,
                loading,
                getData
            }}
        >
            {children}
        </WeatherContext.Provider>
    )
}