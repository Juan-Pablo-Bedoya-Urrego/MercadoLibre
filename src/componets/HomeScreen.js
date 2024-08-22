import React from "react";
import { View, Text, Button } from "react-native";
import globalStyles from "../styles/globlaStyles";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={globalStyles.tittleMain}>Bienvenidos a mercado libre</Text>
            <Button
                title="Iniciar Sesion"
                onPress={() => navigation.navigate('Login')} />
                <Button
                title="Pago"
                onPress={() => navigation.navigate('branchPayment')} />
        </View>
    );
};

export default HomeScreen;