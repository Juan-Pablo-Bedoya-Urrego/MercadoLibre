import React from "react";
import { View, Text, Image, Button } from "react-native";
import profileStyles from "../styles/profileStyles";

const Profile = () => {
    return (
        <View style={profileStyles.container}>
            <Text style={profileStyles.firstTitle}>Perfil de Usuario</Text>
            <Text>______________________________________________</Text>

            <Text style={profileStyles.text}>Bienvenido a su perfil</Text>
            <Text style={profileStyles.title}>Mariangel</Text>
            <Text style={profileStyles.title}>Cartagena Laverde</Text>
            <Text style={profileStyles.title}>29/05/2002</Text>
        </View>
    );
};

export default Profile;
