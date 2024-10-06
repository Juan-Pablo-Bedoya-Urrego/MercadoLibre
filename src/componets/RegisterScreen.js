import React, { useReducer, useState } from "react";
import { View, Text, TextInput, Alert, Pressable } from "react-native";
import globalStyles from "../styles/globlaStyles";
import registerStyles from "../styles/registerStyles";
import DatePicker from "react-native-date-picker";
import { Picker } from "@react-native-picker/picker";
import { useAppContext } from "../Context/context";

const RegisterScreen = ({ navigation }) => {
    const { state, dispatch } = useAppContext();
    const [openSelectionDate, setSelectionDate] = useState(false);

    const departamentosYciudades = {
        Antioquia: ["Medellín", "Envigado", "Bello", "Itagüí", "Rionegro"],
        Cundinamarca: ["Bogotá", "Soacha", "Zipaquirá", "Facatativá", "Chía"],
        Caldas: ["Manizales", "Villamaría", "La Dorada", "Chinchiná", "Riosucio"],
        Quindío: ["Armenia", "Buenavista", "Calarca", "Circasia", "Cordoba"],
        Huila: ["Neiva", "Pitalito", "Garzón", "La Plata", "Campoalegre"],
    };

    const renderPickers = () => (
        <View style={registerStyles.pickerContainer}>
            <View style={registerStyles.pickerWrapper}>
                <Text style={registerStyles.label}>País:</Text>
                <Picker
                    selectedValue={state.country}
                    onValueChange={(countryValue) => dispatch({ type: 'SET_COUNTRY', payload: countryValue })}
                    style={registerStyles.picker}
                >
                    <Picker.Item label="Colombia" value="Colombia" />
                </Picker>
            </View>
            <View style={registerStyles.pickerWrapper}>
                <Text style={registerStyles.label}>Departamento:</Text>
                <Picker
                    selectedValue={state.department}
                    onValueChange={(departmentValue) => dispatch({ type: 'SET_DEPARTMENT', payload: departmentValue })}
                    style={registerStyles.picker}
                >
                    {Object.keys(departamentosYciudades).map((dep, index) => (
                        <Picker.Item key={index} label={dep} value={dep} />
                    ))}
                </Picker>
            </View>
            <View style={registerStyles.pickerWrapper}>
                <Text style={registerStyles.label}>Ciudad:</Text>
                <Picker
                    selectedValue={state.city}
                    onValueChange={(cityValue) => dispatch({ type: 'SET_CITY', payload: cityValue })}
                    style={registerStyles.picker}
                >
                    {state.department ? (
                        departamentosYciudades[state.department].map((ciudad, index) => (
                            <Picker.Item key={index} label={ciudad} value={ciudad} />
                        ))
                    ) : (
                        <Picker.Item label="Selecciona un departamento" value="" />
                    )}
                </Picker>
            </View>
        </View>
    );

    const validateUser = (user) => {
        return user.length <= 10;
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{1,8}$/;
        return passwordRegex.test(password);
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const calculateAge = (dateOfBirth) => {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    const isAgeValid = (dateOfBirth) => {
        const age = calculateAge(dateOfBirth);
        return age >= 18 && age <= 50;
    };

    const handleRegister = () => {
        if (!validateUser(state.user)) {
            Alert.alert('Error', 'El usuario debe tener como máximo 10 caracteres');
            return;
        }

        if (!validatePassword(state.password)) {
            Alert.alert('Error', 'La contraseña debe tener como máximo 8 caracteres e incluir al menos una letra mayúscula, un carácter especial, letras y números');
            return;
        }

        if (!validateEmail(state.email)) {
            Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (!isAgeValid(state.dateBirth)) {
            Alert.alert('Error', 'No está en el rango de edad para crear la cuenta.');
            return;
        }

        Alert.alert('Éxito', 'Registro completado correctamente.');
        navigation.navigate('Login');
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.tittleMain}>Registro</Text>

            <Text style={registerStyles.label}>Usuario</Text>
            <TextInput
                style={registerStyles.input}
                placeholder="Ingrese su usuario"
                placeholderTextColor={registerStyles.placeholder.color}
                value={state.user}
                onChangeText={text => dispatch({ type: 'SET_USER', payload: text })}
            />

            <Text style={registerStyles.label}>Contraseña</Text>
            <View style={registerStyles.inputContainer}>
                <TextInput
                    style={registerStyles.input}
                    placeholder="Ingrese su contraseña"
                    placeholderTextColor={registerStyles.placeholder.color}
                    value={state.password}
                    onChangeText={text => dispatch({ type: 'SET_PASSWORD', payload: text })}
                    secureTextEntry
                />
            </View>

            <Text style={registerStyles.label}>Correo</Text>
            <View style={registerStyles.inputContainer}>
                <TextInput
                    style={registerStyles.input}
                    placeholder="Ingrese su correo"
                    placeholderTextColor={registerStyles.placeholder.color}
                    value={state.email}
                    onChangeText={text => dispatch({ type: 'SET_EMAIL', payload: text })}
                />
            </View>

            <Text style={registerStyles.label}>Fecha de nacimiento</Text>
            <Pressable onPress={() => setSelectionDate(true)}>
                <Text style={registerStyles.input}>Seleccionar Fecha</Text>
            </Pressable>
            <Text style={registerStyles.label}>
                Fecha seleccionada: {state.dateBirth ? state.dateBirth.toLocaleDateString() : 'No seleccionada'}
            </Text>

            <Text style={registerStyles.label}>Dirección</Text>
            <View style={registerStyles.inputContainer}>
                <TextInput
                    style={registerStyles.input}
                    placeholder="Ingrese su dirección"
                    placeholderTextColor={registerStyles.placeholder.color}
                    value={state.address}
                    onChangeText={text => dispatch({ type: 'SET_ADDRESS', payload: text })}
                />
            </View>

            <DatePicker
                modal
                open={openSelectionDate}
                date={state.dateBirth || new Date()} // Usa la fecha actual si state.dateBirth es undefined
                mode="date"
                onConfirm={(date) => {
                    setSelectionDate(false);
                    dispatch({ type: 'SET_DATE_BIRTH', payload: date });
                }}
                onCancel={() => {
                    setSelectionDate(false);
                }}
            />

            {renderPickers()}

            <Pressable style={globalStyles.mainButon} onPress={handleRegister}>
                <Text style={globalStyles.mainButtonText}>Registrarse</Text>
            </Pressable>
        </View>
    );
};

export default RegisterScreen;