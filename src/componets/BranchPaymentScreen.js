import React, { useState } from "react";
import { View, Text, TextInput, Alert, Pressable, Image, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "../styles/globlaStyles";
import BranchPaymentStyles from "../styles/BranchPaymentStyles";
import productOne from "../img/tecladoMouse.jpg";
import productTwo from "../img/kz.webp";

const BranchPaymentScreen = ({ navigation }) => {
    const [products, setProducts] = useState([
        { id: '1', image: productOne, description: 'Combo teclado mouse economico', valueProduct: '1000000', amount: '1' },
        { id: '2', image: productTwo, description: 'Audifonos especiales para gaming', valueProduct: '5200000', amount: '1' },
    ]);
    const [addressDelivery, setAddressDelivery] = useState('');
    const [formPayment, setFormPayment] = useState('PSE');
    const calculateTotalValue = () => {
        return products.reduce((total, product) => {
            return total + (parseInt(product.valueProduct) || 0) * (parseInt(product.amount))
        }, 0);
    };
    const renderDescriptionProduct = (item) => (
        <View style={BranchPaymentStyles.containerText}>
            <Text style={BranchPaymentStyles.label}>Descripcion: {item.description}</Text>
            <Text style={BranchPaymentStyles.label}>Valor: ${item.valueProduct}</Text>
            <View style={BranchPaymentStyles.rowContainer}>
                <Text style={BranchPaymentStyles.label}>Cantidad: </Text>
                <TextInput
                    style={BranchPaymentStyles.inputAmount}
                    placeholder="Cantidad"
                    keyboardType="numeric"
                    maxLength={2}
                    value={item.amount}
                    onChangeText={(text) => updateProduct(item.id, 'amount', text)}
                />
            </View>
        </View>
    );
    const renderProducts = ({ item }) => (
        <View style={BranchPaymentStyles.containerCard}>
            <Image source={item.image} style={BranchPaymentStyles.imgProduct} resizeMode="contain"/>
            {renderDescriptionProduct(item)}
        </View>
    );
    const updateProduct = (id, field, value) => {
        setProducts(products.map(prod =>
            prod.id === id ? { ...prod, [field]: value } : prod
        ));
    };
    return (
        <View style={BranchPaymentStyles.globalContainer}>
            <Text style={BranchPaymentStyles.labelMain}>Sucursal de Pago</Text>
            <FlatList
                data={products}
                renderItem={renderProducts}
                keyExtractor={item => item.id}
            />
            <Text style={BranchPaymentStyles.labelTotal}>Valor Total: ${calculateTotalValue()}</Text>
            <Text style={BranchPaymentStyles.labelMainData}>DATOS DE ENTREGA</Text>
            <Text style={BranchPaymentStyles.labelTotal}>Dirección:</Text>
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
            <Pressable style={globalStyles.mainButon} onPress={() => Alert.alert('Exito', 'Pago realizado con exito')}>
                <Text style={globalStyles.mainButtonText}>Pagar</Text>
            </Pressable>
        </View>
    );
};

export default BranchPaymentScreen;