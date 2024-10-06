import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import myPurchasesStyles from '../styles/myPurchasesStyles';
import { useAppContext } from '../Context/context';

const MyFavoritesScreen = ({ navigation }) => {

    const { state, dispatch } = useAppContext();
    const handleProductPress = (product) => {
        navigation.navigate('ProductDetail', { product });
    };

    const renderProduct = ({ item }) => (
        <Pressable style={myPurchasesStyles.productContainer} onPress={() => handleProductPress(item)}>
            <Image source={item.image} style={myPurchasesStyles.productImage} resizeMode="contain" />
            <View style={myPurchasesStyles.productDetails}>
                <Text style={myPurchasesStyles.productName}>{item.title}</Text>
                <Text style={myPurchasesStyles.productDescription}>{item.description}</Text>
                <Text style={myPurchasesStyles.productValue}>{item.status}</Text>
            </View>
        </Pressable>
    );

    // useEffect para cargar los productos
    useEffect(() => {
        const fetchProducts = () => {
            // Simulando una llamada a una API
            const products = [
                { id: '1', title: 'Apple iPhone 15 Pro Max', description: 'Un sistema de cámaras avanzado con sensores.', status: 'Disponible', image: require('../img/iPhone.jpg') },
                { id: '2', title: 'Canon EOS R5', description: 'Es una cámara sin espejo de alto rendimiento.', status: 'No disponible', image: require('../img/Camara.jpg') },
                { id: '3', title: 'Sony WH-1000XM5', description: 'Son auriculares inalámbricos de gama alta.', status: 'Disponible', image: require('../img/SonyWH-1000XM5.jpg') },
            ];

            // Despachar la acción para establecer la lista de productos
            dispatch({ type: 'SET_PRODUCTS', payload: products });
        };

        fetchProducts();
    }, []); // El array vacío significa que solo se ejecuta una vez al montar el componente

    return (
        <View style={myPurchasesStyles.container}>
            <Text style={myPurchasesStyles.firstTitle}>Mis Favoritos</Text>
            <FlatList
                data={state.productList}
                keyExtractor={(item) => item.id}
                renderItem={renderProduct}
            />
        </View>
    );
};

export default MyFavoritesScreen;