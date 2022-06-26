import { AuthState } from "./AuthContext";

type AuthAction = 
    | {type: 'LOG_IN'; payload: string}
    | {type: 'LOG_OUT'};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'LOG_IN': 
        return {
            ...state,
            rol: action.payload
        }

        case 'LOG_OUT': 
        return {
            ...state,
            rol: null
        }

        default:
            return state;
    }

}
