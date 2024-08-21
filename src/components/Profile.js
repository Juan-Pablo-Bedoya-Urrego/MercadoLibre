import React from "react";
import { View, Text, ImageView } from "react-native";
import globalStyles from "../styles/globalStyles";
import profileStyles from "../styles/profileStyles";

const Profile = () => {
    const name = 'Rocio';
    const lastName = 'Lopez Cordoba';
    const birthdate = '13/11/2006';
    const profileImage = require("../image/usuario.avif");

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>Perfil</Text>
            <ImageView style={profileStyles.profileImage} source={profileImage}> </ImageView>  
            <Text style={profileStyles.label}>{name}</Text>
            <Text style={profileStyles.label}>{lastName}</Text>
            <Text style={profileStyles.label}>{birthdate}</Text>
        </View>
    );
}

export default Profile;
