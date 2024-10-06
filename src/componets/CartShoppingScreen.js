import React, { useState, useEffect, useReducer } from "react";
import { View, Text, TextInput, Alert, Pressable, Image, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "../styles/globlaStyles";
import cardProductsStyles from "../styles/cardProductsStyles";
import { useAppContext } from "../Context/context";



const CartShoppingScreen = ({ navigation }) => {

    const [totalValue, setTotalValue] = useState(0);
    const { state, dispatch } = useAppContext();

    useEffect(() => {
        const total = state.products.reduce((total, product) => {
            return total + (parseInt(product.valueProduct) || 0) * (parseInt(product.amount) || 1);
        }, 0);
        setTotalValue(total);
    }, [state.products]);

    const removeProduct = (id) => {
        dispatch({ type: 'REMOVE_PRODUCT', payload: id });
    };

    const updateProduct = (id, value) => {
        dispatch({ type: 'UPDATE_AMOUNT', payload: { id, value } });
    };

    const renderProductControls = (item) => {
        return (
            <View style={cardProductsStyles.quantityContainer}>
                <Pressable
                    style={cardProductsStyles.button}
                    onPress={() => updateProduct(item.id, String(Math.max((parseInt(item.amount) || 1) - 1, 1)))}
                >
                    <Text style={cardProductsStyles.buttonText}>-</Text>
                </Pressable>
                <TextInput
                    style={cardProductsStyles.inputAmount}
                    placeholder="Cantidad"
                    keyboardType="numeric"
                    maxLength={2}
                    value={item.amount}
                    onChangeText={(text) => updateProduct(item.id, text)}
                />
                <Pressable
                    style={cardProductsStyles.button}
                    onPress={() => updateProduct(item.id, String((parseInt(item.amount) || 0) + 1))}
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

    return (
        <View style={cardProductsStyles.globalContainer}>
            <Text style={cardProductsStyles.labelMain}>CARRITO</Text>
            <FlatList
                data={state.products}
                renderItem={renderProducts}
                keyExtractor={item => item.id}
            />
            <Text style={cardProductsStyles.labelTotal}>Valor Total: <Text style={cardProductsStyles.labelTotalValue}>${totalValue}</Text></Text>
            <Pressable style={globalStyles.mainButon} onPress={() => navigation.navigate('BranchPayment')}>
                <Text style={globalStyles.mainButtonText}>Pagar</Text>
            </Pressable>
        </View>
    );
};

export default CartShoppingScreen;