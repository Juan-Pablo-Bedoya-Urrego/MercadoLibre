import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, TextInput, Alert } from "react-native";
import profileStyles from "../styles/profileStyles";
import PhotoProfile from "../img/PhotoProfile.png";
import { useAppContext } from "../Context/context";

const ProfileScreen = ({ navigation }) => {
    const { state, dispatch } = useAppContext();
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingLastName, setIsEditingLastName] = useState(false);
    const [editedName, setEditedName] = useState(state.name);
    const [editedLastName, setEditedLastName] = useState(state.lastName);
    const [hasUpdated, setHasUpdated] = useState(false);

    useEffect(() => {
        if (hasUpdated) {
            Alert.alert('Datos Actualizados', 'El nombre o apellido ha sido actualizado.');
            setHasUpdated(false);
        }
    }, [hasUpdated]);

    const handleNameBlur = () => {
        setIsEditingName(false);
        if (editedName !== state.name) {
            dispatch({ type: 'UPDATE_NAME', payload: editedName });
            setHasUpdated(true);
        }
    };

    const handleLastNameBlur = () => {
        setIsEditingLastName(false);
        if (editedLastName !== state.lastName) {
            dispatch({ type: 'UPDATE_LASTNAME', payload: editedLastName });
            setHasUpdated(true);
        }
    };

    if (!state.user) {
        return (
            <View style={profileStyles.noUserContainer}>
                <Image
                    style={profileStyles.noUserImage}
                />
                <Text style={profileStyles.firstTitle}>
                    ¡Bienvenido!
                </Text>
                <Text style={profileStyles.text}>
                    Por favor, inicia sesión o regístrate para acceder a tu perfil y disfrutar de todas nuestras funciones.
                </Text>
                <Pressable
                    style={profileStyles.noUserButton}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={profileStyles.buttonText}>Iniciar Sesión</Text>
                </Pressable>
            </View>
        );
    }


    return (
        <View style={profileStyles.container}>
            <Text style={profileStyles.firstTitle}>Perfil de Usuario</Text>
            <View style={profileStyles.separator} />
            <Text style={profileStyles.text}>Bienvenido a su perfil</Text>
            <Image style={profileStyles.imageContainer} source={PhotoProfile} />

            {isEditingName ? (
                <TextInput
                    style={profileStyles.nameInput}
                    value={editedName}
                    onChangeText={setEditedName}
                    onBlur={handleNameBlur}
                    autoFocus={true}
                />
            ) : (
                <Text style={profileStyles.name} onPress={() => {
                    setEditedName(state.name);
                    setIsEditingName(true);
                }}>
                    {state.name}
                </Text>
            )}

            {isEditingLastName ? (
                <TextInput
                    style={profileStyles.nameInput}
                    value={editedLastName}
                    onChangeText={setEditedLastName}
                    onBlur={handleLastNameBlur}
                />
            ) : (
                <Text style={profileStyles.name} onPress={() => {
                    setEditedLastName(state.lastName);
                    setIsEditingLastName(true);
                }}>
                    {state.lastName}
                </Text>
            )}

            <Pressable style={profileStyles.button} onPress={() => navigation.navigate('Favorites')}>
                <Text style={profileStyles.buttonText}>Mis favoritos</Text>
            </Pressable>
            <Pressable style={profileStyles.button} onPress={() => navigation.navigate('Purchases')}>
                <Text style={profileStyles.buttonText}>Mis compras</Text>
            </Pressable>
            <Pressable style={profileStyles.button} onPress={() => navigation.navigate('Support')}>
                <Text style={profileStyles.buttonText}>Soporte</Text>
            </Pressable>
            <Pressable style={profileStyles.button} onPress={() => navigation.navigate('Offers')}>
                <Text style={profileStyles.buttonText}>Ofertas</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;
