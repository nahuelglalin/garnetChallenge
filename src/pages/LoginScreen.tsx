import React, { useContext, useRef } from 'react';
import { KeyboardAvoidingView, Platform, Text, View, TouchableOpacity, Keyboard, Image, Alert, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Background } from '../components/Background';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/loginTheme';
import { AuthContext } from '../context/authentication/AuthContext';
import { ThemeContext } from '../context/theme/ThemeContext';

export const LoginScreen = () => {

    const { signIn } = useContext(AuthContext);

    const { theme } = useContext(ThemeContext);

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    const passwordInput = useRef<TextInput>();

    const login = () => {
        Keyboard.dismiss();
        let loginSuccess = signIn({ email, password });

        if (!loginSuccess) {
            Alert.alert(
                "Error",
                "Las credenciales para el login son: \n admin@admin / pw: admin \n user@user / pw: user ",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
    }

    return (
        <Background>
            <StatusBar
                backgroundColor='#111'
                barStyle={(theme.currentTheme == 'dark') ? 'light-content' : 'dark-content'}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <View style={loginStyles.formContainer}>
                    <Text style={{ ...loginStyles.title, color: theme.colors.text }}>MeetApp</Text>

                    {/* Email */}
                    <TextInput
                        placeholder='Insert email...'
                        placeholderTextColor={(theme.currentTheme === 'light') ? '#777' : "rgba(255,255,255,0.4)"}
                        keyboardType='email-address'
                        underlineColorAndroid="rgba(255,255,255,0.4)"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIos,
                            (theme.currentTheme === 'light') && loginStyles.inputLight
                        ]}

                        value={email}
                        onChangeText={(value: any) => onChange(value, 'email')}
                        onSubmitEditing={() => passwordInput.current?.focus()}

                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                    {/* Password */}
                    <TextInput
                        placeholder='******'
                        placeholderTextColor={(theme.currentTheme === 'light') ? '#777' : "rgba(255,255,255,0.4)"}
                        underlineColorAndroid="rgba(255,255,255,0.4)"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIos,
                            (theme.currentTheme === 'light') && loginStyles.inputLight
                        ]}
                        selectionColor='#fff'
                        secureTextEntry={true}
                        ref={passwordInput as any}
                        onSubmitEditing={login}

                        value={password}
                        onChangeText={(value: any) => onChange(value, 'password')}

                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                    {/* Button Login */}
                    <TouchableOpacity
                        onPress={login}
                        activeOpacity={0.5}
                    >
                        <View style={loginStyles.buttonContainer}>
                            <Text style={loginStyles.buttonText}>Login</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Image */}
                    <Image
                        source={require('../assets/web-it-isometric-1024x769.png')}
                        style={loginStyles.image}
                    />
                </View>
            </KeyboardAvoidingView>
        </Background >
    )
}
