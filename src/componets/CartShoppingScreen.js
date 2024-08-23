import React, { useState } from "react";
import { View, Text, TextInput, Alert, Pressable, Image, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "../styles/globlaStyles";
import cardProductsStyles from "../styles/cardProductsStyles";
import productOne from "../img/tecladoMouse.jpg";
import productTwo from "../img/kz.webp";

const CartShoppingScreen = ({ navigation }) => {
    const [products, setProducts] = useState([
        { id: '1', image: productOne, description: 'Combo teclado mouse economico', valueProduct: '1000000', amount: '1' },
        { id: '2', image: productTwo, description: 'Audifonos especiales para gaming', valueProduct: '5200000', amount: '1' },
    ]);
    const calculateTotalValue = () => {
        return products.reduce((total, product) => {
            return total + (parseInt(product.valueProduct) || 0) * (parseInt(product.amount))
        }, 0);
    };
    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };
    const renderProductControls = (item) => {
        return (
            <View style={cardProductsStyles.quantityContainer}>
                <Pressable
                    style={cardProductsStyles.button}
                    onPress={() => updateProduct(item.id, 'amount', String(Math.max((parseInt(item.amount) || 1) - 1, 1)))}
                >
                    <Text style={cardProductsStyles.buttonText}>-</Text>
                </Pressable>
                <TextInput
                    style={cardProductsStyles.inputAmount}
                    placeholder="Cantidad"
                    keyboardType="numeric"
                    maxLength={2}
                    value={item.amount}
                    onChangeText={(text) => updateProduct(item.id, 'amount', text)}
                />
                <Pressable
                    style={cardProductsStyles.button}
                    onPress={() => updateProduct(item.id, 'amount', String((parseInt(item.amount) || 0) + 1))}
                >
                    <Text style={cardProductsStyles.buttonText}>+</Text>
                </Pressable>
            </View>
        );
    };
    const renderButtonDelete = (item) => (
        <Pressable
            style={cardProductsStyles.clearButton}
            onPress={() => removeProduct(item.id)}
        >
            <Image
                source={require('../img/borrar.png')}
                style={cardProductsStyles.icon} />
        </Pressable>
    );
    const renderDescriptionProduct = (item) => (
        <View style={cardProductsStyles.containerText}>
            <Text style={cardProductsStyles.label}>Descripción: {item.description}</Text>
            <Text style={cardProductsStyles.label}>Valor: ${item.valueProduct}</Text>
            <View style={cardProductsStyles.rowContainer}>
                {renderProductControls(item)}
                {renderButtonDelete(item)}
            </View>
        </View>
    );
    const renderProducts = ({ item }) => (
        <View style={cardProductsStyles.containerCard}>
            <Image source={item.image} style={cardProductsStyles.imgProduct} resizeMode="contain" />
            {renderDescriptionProduct(item)}
        </View>
    );
    const updateProduct = (id, field, value) => {
        setProducts(products.map(prod =>
            prod.id === id ? { ...prod, [field]: value } : prod
        ));
    };
    return (
        <View style={cardProductsStyles.globalContainer}>
            <Text style={cardProductsStyles.labelMain}>CARRITO</Text>
            <FlatList
                data={products}
                renderItem={renderProducts}
                keyExtractor={item => item.id}
            />
            <Text style={cardProductsStyles.labelTotal}>Valor Total: <Text style={cardProductsStyles.labelTotalValue}>${calculateTotalValue()}</Text></Text>
            <Pressable style={globalStyles.principalButon} onPress={() => navigation.navigate('branchPayment')}>
                <Text style={globalStyles.principalButtonText}>Pagar</Text>
            </Pressable>
        </View>
    );
};

export default CartShoppingScreen;