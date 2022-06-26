import { useEffect, useRef, useState } from 'react';
import { Location } from '../interfaces/LocationInterface';
import Geolocation from '@react-native-community/geolocation';

export const useLocation = () => {

    //State para saber si existe location del usuario
    const [hasLocation, setHasLocation] = useState(false);

    //state para hacer el seguimiento del usuario a medida que se va moviendo
    const [userLocation, setUserLocation] = useState<Location>({
        longitude: 0,
        latitude: 0
    });

    //para saber cuando el componente esta montado
    const isMounted = useRef<boolean>(true);

    useEffect(() => {
        isMounted.current = true;

        //cuando se llame este return, significa que el componente ya fue desmontado
        return () => {
            isMounted.current = false;
        }
    }, [])

    //Obtengo la location del user
    useEffect(() => {
        getCurrentLocation()
            .then(location => {

                if (!isMounted.current) return;
                setUserLocation(location);
                setHasLocation(true);

            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    //Funcion que retorna una promesa, resuelve un Location, que contiene lat y lon
    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {

            Geolocation.getCurrentPosition(
                (info) => {
                    resolve({
                        latitude: info.coords.latitude,
                        longitude: info.coords.longitude
                    });
                },
                (error) => reject({ error }),
                {
                    enableHighAccuracy: true
                }
            );

        });
    }

    return {
        hasLocation,
        getCurrentLocation,
        userLocation,
    }
}
