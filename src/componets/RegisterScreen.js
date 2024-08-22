import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Pressable } from "react-native";
import globalStyles from "../styles/globlaStyles";
import registerStyles from "../styles/registerStyles";
import DatePicker from "react-native-date-picker";
import { Picker } from "@react-native-picker/picker";

const RegisterScreen = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [dateBirth, setDateBirth] = useState(new Date());
    const [openSelectionDate, setSelectionDate] = useState(false);
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState("Colombia")
    const [department, setDepartment] = useState("Antioquia");
    const [city, setCity] = useState("Medellin");
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
                    selectedValue={country}
                    onValueChange={(countryValue) => setCountry(countryValue)}
                    style={registerStyles.picker}
                >
                    <Picker.Item label="Colombia" value="Colombia" />
                </Picker>
            </View>
            <View style={registerStyles.pickerWrapper}>
                <Text style={registerStyles.label}>Departamento:</Text>
                <Picker
                    selectedValue={department}
                    onValueChange={(departmentValue) => setDepartment(departmentValue)}
                    style={registerStyles.picker}
                >
                    <Picker.Item label="Antioquia" value="Antioquia" />
                    <Picker.Item label="Cundinamarca" value="Cundinamarca" />
                    <Picker.Item label="Caldas" value="Caldas" />
                    <Picker.Item label="Quindío" value="Quindío" />
                    <Picker.Item label="Huila" value="Huila" />
                </Picker>
            </View>
            <View style={registerStyles.pickerWrapper}>
                <Text style={registerStyles.label}>Ciudad:</Text>
                <Picker
                    selectedValue={city}
                    onValueChange={(cityValue) => setCity(cityValue)}
                    style={registerStyles.picker}
                >
                    {department ? (
                        departamentosYciudades[department].map((ciudad, index) => (
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

    const validateAddress = (address) => {
        return address.length <= 30;
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[0-9]).{1,8}$/;
        return passwordRegex.test(password);
    };

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

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
        if (!validateUser(user)) {
            Alert.alert('Error', 'El usuario debe tener como máximo 10 caracteres');
            return;
        }

        if (!validatePassword(password)) {
            Alert.alert('Error', 'La contraseña debe tener como máximo 8 caracteres e incluir al menos una letra mayúscula, un carácter especial, letras y números');
            return;
        }

        if (!validateEmail(address)) {
            Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido.');
            return;
        }

        if (!isAgeValid(dateBirth)) {
            Alert.alert('Error', 'No está en el rango de edad para crear la cuenta.');
            return;
        }

        Alert.alert('Éxito', 'Registro completado correctamente.');
        navigation.navigate('Login')
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.tittleMain}>Registro</Text>
            <Text style={registerStyles.label}>Usuario</Text>
            <TextInput
                style={registerStyles.input}
                placeholder="Ingrese su usuario"
                placeholderTextColor={registerStyles.placeholder.color}
                value={user}
                onChangeText={text => setUser(text)}
            />

            <Text style={registerStyles.label}>Contraseña</Text>
            <View style={registerStyles.inputContainer}>
                <TextInput
                    style={registerStyles.input}
                    placeholder="Ingrese su contraseña"
                    placeholderTextColor={registerStyles.placeholder.color}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
            </View>

            <Text style={registerStyles.label}>Correo</Text>
            <View style={registerStyles.inputContainer}>
                <TextInput
                    style={registerStyles.input}
                    placeholder="Ingrese su correo"
                    placeholderTextColor={registerStyles.placeholder.color}
                    value={address}
                    onChangeText={text => setAddress(text)}
                />
            </View>

            <Text style={registerStyles.label}>Fecha de nacimiento</Text>
            <Pressable onPress={() => setSelectionDate(true)}>
                <Text style={registerStyles.input}>Seleccionar Fecha</Text>
            </Pressable>

            <Text style={registerStyles.label}>Fecha seleccionada: {dateBirth.toLocaleDateString()}</Text>

            <DatePicker
                modal
                open={openSelectionDate}
                date={dateBirth}
                mode="date"
                onConfirm={(date) => {
                    setSelectionDate(false);
                    setDateBirth(date);
                }}
                onCancel={() => {
                    setSelectionDate(false);
                }}
            />

            {renderPickers()}

            <Pressable style={globalStyles.principalButon} onPress={handleRegister}>
                <Text style={globalStyles.principalButtonText}>Registrarse</Text>
            </Pressable>
        </View>
    );
};

export default RegisterScreen;