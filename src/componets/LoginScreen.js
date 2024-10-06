import React, { useReducer, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import globalStyles from "../styles/globlaStyles";
import loginStyles from '../styles/loginStyles';
import { useAppContext } from '../Context/context';


const LoginScreen = ({ navigation }) => {
    const {state, dispatch} = useAppContext();

    useEffect(() => {
        dispatch({ type: 'SET_USER', payload: '' });
        dispatch({ type: 'SET_PASSWORD', payload: '' });
    }, []);

    const validateUser = (user) => {
        return user.length <= 10;
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{1,8}$/;
        return passwordRegex.test(password);
    };

    const handleLogin = () => {
        if (!validateUser(state.user)) {
            Alert.alert('Error', 'El usuario debe tener como máximo 10 caracteres');
            return;
        }

        if (!validatePassword(state.password)) {
            Alert.alert('Error', 'La contraseña debe tener como máximo 8 caracteres e incluir al menos una letra mayúscula, un carácter especial, letras y números');
            return;
        }
        
        Alert.alert('Inicio con éxito', `Bienvenido, ${state.user}!`);
        navigation.navigate('Home');
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.tittleMain}>Inicia Sesion</Text>
            <Text style={loginStyles.label}>Usuario</Text>
            <TextInput
                style={loginStyles.input}
                placeholder="Ingrese su usuario"
                placeholderTextColor={loginStyles.placeholder.color}
                value={state.user}
                onChangeText={text => dispatch({ type: 'SET_USER', payload: text })}
            />

            <Text style={loginStyles.label}>Contraseña</Text>
            <View style={loginStyles.passwordContainer}>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Ingrese su contraseña"
                    placeholderTextColor={loginStyles.placeholder.color}
                    value={state.password}
                    onChangeText={text => dispatch({ type: 'SET_PASSWORD', payload: text })}
                    secureTextEntry
                />
            </View>

            <Pressable style={globalStyles.mainButon} onPress={handleLogin}>
                <Text style={globalStyles.mainButtonText}>Iniciar sesión</Text>
            </Pressable>

            <View style={loginStyles.footer}>
                <Text style={loginStyles.footerText}>No tienes cuenta? </Text>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={loginStyles.footerLink}>Registrarse</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default LoginScreen;
