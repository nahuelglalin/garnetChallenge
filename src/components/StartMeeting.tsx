import React, { useContext } from 'react'
import { StyleSheet, Text, Touchable, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import { AuthContext } from '../context/authentication/AuthContext'
import { ThemeContext } from '../context/theme/ThemeContext';
import { useForm } from '../hooks/useForm'
import { meetingStyles } from '../theme/meetingTheme';

const StartMeeting = () => {

    const {theme} = useContext(ThemeContext);

    const { rol } = useContext(AuthContext);

    const { onChange } = useForm({
        roomId: ''
    });

    const handleStartMeeting = () => {
        //Aca se debería evaluar si se está creando una meeting (admin),
        //o si nos estamos uniendo a una (user). 
        //Para eso, tendriamos que tener en cuenta el rol del user. 

        //Pegandole a un backend, validariamos que el roomId efectivamente exista,
        //y demas datos que necesitamos un backend para seguir programando.
    }

    return (
        <View>

            <View>
                <TextInput
                    style={ (theme.currentTheme == 'light') ? meetingStyles.textInputLight : meetingStyles.textInput}
                    placeholder="Enter Room Id"
                    onChangeText={(value) => onChange(value, 'roomId')}
                />
            </View>

            <TouchableOpacity
                activeOpacity={0.5}
                onPress={ handleStartMeeting }
            >
                <View style={meetingStyles.buttonContainer}>
                    <Text style={meetingStyles.buttonText}>{(rol == 'admin') ? 'Create' : 'Join'}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default StartMeeting
