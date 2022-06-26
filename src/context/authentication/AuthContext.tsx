import React, {createContext, useReducer} from 'react';
import { authReducer } from './authReducer';

//Interfaz para manejar el email y pass ingresados por el user
interface LoginData {
    email: string;
    password: string;
}

//Interfaz que va a tener el state de Auth
export interface AuthState {
    rol: string | null;
}

//InitialState
const initialState: AuthState = {
    rol: null
}

//Lo que el context expone 
type AuthContextProps = {
    rol: string | null;
    signIn: (loginData: LoginData) => boolean;
    signOut: () => void;
}

//Creacion del context
export const AuthContext = createContext({} as AuthContextProps);

//Creacion del provider
export const AuthProvider = ({children}: any) => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Debido a que no existe un backend, se maneja el signIn de la siguiente forma:
    //validando que el email sea alguno de los que están hardcodeados
    //En la vida real, deberiamos hacer una peticion HTTP, y si el back devuelve un token,
    //permitir el acceso a nuestra app. Tambien en ese momento leeríamos el rol del user.
    const signIn = ({email, password}: LoginData) => {
        
        if (email === 'admin@admin' && password === 'admin'){
            dispatch({ type: 'LOG_IN', payload: 'admin' });
            return true;
        } else if (email === 'user@user' && password === 'user') {
            dispatch({ type: 'LOG_IN', payload: 'user' });
            return true;
        } 

        return false;
    }

    const signOut = () => {
        dispatch({type: 'LOG_OUT'});
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                signIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

