import React from "react";
import { View, Text, Button} from "react-native";
import globalStyles from "../styles/globlaStyles";
import ProfileStyles from "../styles/profileStyles";

const Profile =({profile}) =>{

    const name = 'Rocio';
    const lastName= 'Lopez Cordoba';
    const birthdate = '13/11/2006';
    const profileImage= "./src/styles/usuario.avif";
    return (
        <view style={globalStyles.container}>
            <text style={globalStyles.Text}> Perfil </text>
            <text style={ProfileStyles.label}>{profile.name}</text>
            <text style={ProfileStyles.label}>{profile.lastName}</text>
            <text style={ProfileStyles.label}>{profile.birthdate}</text>
        </view>

    );
}
export default Profile;