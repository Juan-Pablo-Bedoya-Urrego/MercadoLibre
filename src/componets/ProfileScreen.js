import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import profileStyles from "../styles/profileStyles";
import globalStyles from "../styles/globlaStyles";
import PhotoProfile from "../img/PhotoProfile.png"

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={profileStyles.container}>
            <Text style={profileStyles.firstTitle}>Perfil de Usuario</Text>
            <Text>______________________________________________</Text>
            <Text style={profileStyles.text}>Bienvenido a su perfil</Text>
            <Image style={profileStyles.imageContainer} source={PhotoProfile} />
            <Text style={profileStyles.title}>  Daniela  Alejandra  {"\n"}{"\n"}   Tejeiro  Montoya  {"\n"} {"\n"}     10 / 11 / 2003
            </Text>
            <Pressable style={globalStyles.mainButon} onPress={() => navigation.navigate('offers')}>
                <Text style={globalStyles.mainButtonText}>Mis favoritos</Text>
            </Pressable>
            <Pressable style={globalStyles.mainButon} onPress={() => navigation.navigate('purchases')}>
                <Text style={globalStyles.mainButtonText}>Mis compras</Text>
            </Pressable>
            <Pressable style={globalStyles.mainButon} onPress={() => navigation.navigate('Support')}>
                <Text style={globalStyles.mainButtonText}>Soporte</Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;