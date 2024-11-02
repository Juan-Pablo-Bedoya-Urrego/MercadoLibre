import React, { useReducer, useEffect, useState, createContext } from "react";
import { View, Text, TextInput, Alert, Pressable, Image, FlatList, KeyboardAvoidingView, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "../styles/globlaStyles";
import BranchPaymentStyles from "../styles/BranchPaymentStyles";
import { useAppContext } from "../Context/context";
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';


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
            <Image source={{ uri: item.image }} style={BranchPaymentStyles.imgProduct} resizeMode="contain" />
            {renderDescriptionProduct(item)}
        </View>
    );

    const handlePayment = async () => {
        try {
            const orderData = {
                userId: state.user,  
                userInfo: {
                    address: state.address,
                    country: state.country,
                    department: state.department,
                    city: state.city,
                    email: state.email,  
                    name: state.name,
                    lastName: state.lastName,
                },
                deliveryInfo: {
                    addressDelivery: addressDelivery,
                    formPayment: formPayment,
                },
                products: products.map(product => ({
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    description: product.description,
                    valueProduct: product.valueProduct,
                    amount: product.amount,
                })),
                totalValue: totalValue,
                paymentDate: new Date().toISOString(),
            };

            await addDoc(collection(db, 'orders'), orderData);

            Alert.alert('Éxito', 'Pago realizado con éxito y datos guardados en la base de datos');
            navigation.navigate('Home');
            dispatch({ type: 'CLEAR_CART' });
        } catch (error) {
            Alert.alert('Error', 'Hubo un problema al procesar el pago: ' + error.message);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <FlatList
                data={products}
                renderItem={renderProducts}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <>
                        <Text style={BranchPaymentStyles.labelMain}>Sucursal de Pago</Text>
                    </>
                }
                ListFooterComponent={
                    <>
                        <Text style={BranchPaymentStyles.labelTotal}>
                            Valor Total: <Text style={BranchPaymentStyles.labelTotalValue}>${totalValue}</Text>
                        </Text>

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

                        <Pressable
                            style={globalStyles.mainButon}
                            onPress={handlePayment}
                        >
                            <Text style={globalStyles.mainButtonText}>Pagar</Text>
                        </Pressable>
                    </>
                }
            />
        </KeyboardAvoidingView>
    );
};

export default BranchPaymentScreen;
