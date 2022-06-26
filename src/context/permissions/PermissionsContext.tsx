//Este context va a estar al pendiente de los cambios en el estado de los permisos
import React, { createContext, useEffect, useState } from "react";
import { AppState, Platform } from "react-native";
import { check, PERMISSIONS, PermissionStatus, request, openSettings } from "react-native-permissions";

//Interfaz que va a tener el estado de los permisos
export interface PermissionsState {
    locationStatus: PermissionStatus;
} 

//Initial state
export const permissionInitialState: PermissionsState = {
    locationStatus: 'unavailable'
}

//Lo que el context expone 
type PermissionContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

//Creacion del context
export const PermissionsContext = createContext({} as PermissionContextProps);

//Creacion del provider
export const PermissionsProvider = ({ children }: any) => {

    //Inicio el state con el valor de permissionInitialState
    const [permissions, setPermissions] = useState(permissionInitialState);

    //lee el estado de la app, si esta en 2do plano, si se minimiza, etc
    //esto es para que, si se le cambian los permisos a la app desde afuera, es decir
    //le saco un permiso a la app desde las settings, la app se actualice y 
    //muestre la info correcta
    useEffect(() => {

        //para prevenir un "loading" infinito
        checkLocationPermission();

        AppState.addEventListener('change', (state) => {
            if (state != 'active') {
                return;
            } else {
                checkLocationPermission();
            }
        });
    }, [])
    
    //Chequear si tengo permisos para acceder a la localizacion con gps 
    const askLocationPermission = async () => {

        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await request( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );
        } else {
            permissionStatus = await request( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );
        }

        //Si el permiso fue bloqueado, abro las settings del Sistema Operativo para cambiarlo
        if (permissionStatus === 'blocked' || permissionStatus === 'denied'){
            openSettings();
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus 
        });
    }

    //Se dispara cuando la persona regresa a nuestra app, chequea el estado de los permisos
    const checkLocationPermission = async () => {
        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await check( PERMISSIONS.IOS.LOCATION_WHEN_IN_USE );
        } else {
            permissionStatus = await check( PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION );
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus 
        });
    }

    return (
        <PermissionsContext.Provider
            value={{
                permissions,
                askLocationPermission,
                checkLocationPermission,
            }}
        >
            {children}
        </PermissionsContext.Provider>
    )
}