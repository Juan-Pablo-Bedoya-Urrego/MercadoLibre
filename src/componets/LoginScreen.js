import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, CheckBox, Alert } from 'react-native';
import globalStyles from "../styles/globlaStyles";
import loginStyles from '../styles/loginStyles';

const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const validateUser = (user) => {
        return user.length <= 10;
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{1,8}$/;
        return passwordRegex.test(password);
    };

    const handleLogin = () => {
        if (!validateUser(user)) {
            Alert.alert('Error', 'El usuario debe tener como máximo 10 caracteres');
            return;
        }

        if (!validatePassword(password)) {
            Alert.alert('Error', 'La contraseña debe tener como máximo 8 caracteres e incluir al menos una letra mayúscula, un carácter especial, letras y números');
            return;
        }
        Alert.alert('Inicio con exito', `Bienvenido, ${user}!`);
        navigation.navigate('Home')
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.tittleMain}>Inicia Sesion</Text>
            <Text style={loginStyles.label}>Usuario</Text>
            <TextInput
                style={loginStyles.input}
                placeholder="Ingrese su usuario"
                placeholderTextColor={loginStyles.placeholder.color}
                value={user}
                onChangeText={text => setUser(text)}
            />

            <Text style={loginStyles.label}>Conntraseña</Text>
            <View style={loginStyles.passwordContainer}>
                <TextInput
                    style={loginStyles.input}
                    placeholder="Ingrese su contraseña"
                    placeholderTextColor={loginStyles.placeholder.color}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
            </View>

            <Pressable style={loginStyles.loginButton} onPress={handleLogin}>
                <Text style={loginStyles.loginButtonText}>Iniciar sesión</Text>
            </Pressable>

            <View style={loginStyles.footer}>
                <Text style={loginStyles.footerText}>No tienes cuenta? </Text>
                <Pressable>
                    <Text style={loginStyles.footerLink}>Registrarse</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default LoginScreen;
