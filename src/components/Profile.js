import React from "react";
import { View, Text, Image, Button } from "react-native";
import profileStyles from "../styles/profileStyles";
import PhotoProfile from "../image/PhotoProfile.png"

const Profile = () => {
    return (
        <View style={profileStyles.container}>
            <Text style={profileStyles.firstTitle}>Perfil de Usuario</Text>
            <Text>______________________________________________</Text>
            <Text style={profileStyles.text}>Bienvenido a su perfil</Text>
            <Image style={profileStyles.imageContainer} source={PhotoProfile} />
            <Text style={profileStyles.title}>  Daniela  Alejandra  {"\n"}{"\n"}   Tejeiro  Montoya  {"\n"} {"\n"}     10 / 11 / 2003
            </Text>
        </View>
    );
};

export default Profile;
