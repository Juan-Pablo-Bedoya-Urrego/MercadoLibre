import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import profileStyles from "../styles/profileStyles";
import globalStyles from "../styles/globlaStyles";
import PhotoProfile from "../img/PhotoProfile.png"
import { TextInput } from "react-native-gesture-handler";

const ProfileScreen = ({ navigation }) => {
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingLastName, setIsEditingLastName] = useState(false);
    const [name, setName] = useState('Pedro Pablo');
    const [lastName, setLastName] = useState('Montoya varado');
    return (
        <View style={profileStyles.container}>
            <Text style={profileStyles.firstTitle}>Perfil de Usuario</Text>
            <View style={profileStyles.separator} />
            <Text style={profileStyles.text}>Bienvenido a su perfil</Text>
            <Image style={profileStyles.imageContainer} source={PhotoProfile} />
            {isEditingName ? (
                <TextInput
                    style={profileStyles.nameInput}
                    value={name}
                    onChangeText={setName}
                    onBlur={() => setIsEditingName(false)}
                    autoFocus={true}
                />
            ) :
                <Text style={profileStyles.name}
                    onPress={() => setIsEditingName(true)}>{name}</Text>}
            {isEditingLastName ? (
                <TextInput
                    style={profileStyles.nameInput}
                    value={lastName}
                    onChangeText={setLastName}
                    onBlur={() => setIsEditingLastName(false)}
                    autoFocus={true}
                />
            ) :
                <Text style={profileStyles.name}
                    onPress={() => setIsEditingLastName(true)}>{lastName}</Text>}
            <Text style={profileStyles.name}>10/11/2003</Text>
            <Pressable style={profileStyles.button} onPress={() => navigation.navigate('favorite')}>
                <Text style={profileStyles.buttonText}>Mis favoritos</Text>
            </Pressable>
            <Pressable style={profileStyles.button} onPress={() => navigation.navigate('purchases')}>
                <Text style={profileStyles.buttonText}>Mis compras</Text>
            </Pressable>
            <Pressable style={profileStyles.button} onPress={() => navigation.navigate('Support')}>
                <Text style={profileStyles.buttonText}>Soporte</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;