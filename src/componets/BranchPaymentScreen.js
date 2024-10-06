import React, { useReducer, useEffect, useState, createContext } from "react";
import { View, Text, TextInput, Alert, Pressable, Image, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "../styles/globlaStyles";
import BranchPaymentStyles from "../styles/BranchPaymentStyles";
import { useAppContext } from "../Context/context";


const BranchPaymentScreen = ({ navigation }) => {

    const { state, dispatch } = useAppContext(); 
    const { products } = state;
    const [addressDelivery, setAddressDelivery] = useState('');
    const [formPayment, setFormPayment] = useState('PSE');
    const [totalValue, setTotalValue] = useState(0);

    
    useEffect(() => {
        const total = products.reduce((total, product) => {
            return total + (parseInt(product.valueProduct) || 0) * (parseInt(product.amount) || 1);
        }, 0);
        setTotalValue(total);
    }, [products]);

    const renderDescriptionProduct = (item) => (
        <View style={BranchPaymentStyles.containerText}>
            <Text style={BranchPaymentStyles.label}>Descripción: {item.description}</Text>
            <Text style={BranchPaymentStyles.label}>Valor: ${item.valueProduct}</Text>
            <View style={BranchPaymentStyles.rowContainer}>
                <Text style={BranchPaymentStyles.label}>Cantidad: </Text>
                <TextInput
                    style={BranchPaymentStyles.inputAmount}
                    placeholder="Cantidad"
                    keyboardType="numeric"
                    maxLength={2}
                    value={item.amount}
                    onChangeText={(text) => dispatch({ type: 'UPDATE_AMOUNTB', payload: { id: item.id, value: text } })}
                />
            </View>
        </View>
    );

    const renderProducts = ({ item }) => (
        <View style={BranchPaymentStyles.containerCard}>
            <Image source={item.image} style={BranchPaymentStyles.imgProduct} resizeMode="contain" />
            {renderDescriptionProduct(item)}
        </View>
    );

    return (
        <View style={BranchPaymentStyles.globalContainer}>
            <Text style={BranchPaymentStyles.labelMain}>Sucursal de Pago</Text>
            <FlatList
                data={products}
                renderItem={renderProducts}
                keyExtractor={item => item.id}
            />
            <Text style={BranchPaymentStyles.labelTotal}>Valor Total: <Text style={BranchPaymentStyles.labelTotalValue}>${totalValue}</Text></Text>
            <Text style={BranchPaymentStyles.labelMainData}>DATOS DE ENTREGA</Text>
            <Text style={BranchPaymentStyles.label}>Dirección:</Text>
            <TextInput
                placeholder="Dirección de entrega"
                placeholderTextColor={globalStyles.placeholder.color}
                value={addressDelivery}
                onChangeText={setAddressDelivery}
                maxLength={30}
                style={BranchPaymentStyles.input}
            />
            <Text style={BranchPaymentStyles.label}>Forma de pago:</Text>
            <Picker
                selectedValue={formPayment}
                onValueChange={(itemValue) => setFormPayment(itemValue)}
                style={BranchPaymentStyles.picker}
            >
                <Picker.Item label="PSE" value="PSE" />
                <Picker.Item label="Tarjeta de crédito" value="Tarjeta de crédito" />
                <Picker.Item label="Efecty" value="Efecty" />
            </Picker>
            <Pressable style={globalStyles.mainButon} onPress={() => Alert.alert('Éxito', 'Pago realizado con éxito')}>
                <Text style={globalStyles.mainButtonText}>Pagar</Text>
            </Pressable>
        </View>
    );
};

export default BranchPaymentScreen;