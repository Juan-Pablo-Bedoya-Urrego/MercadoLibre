import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Pressable, Alert } from 'react-native';
import myPurchasesStyles from '../styles/myPurchasesStyles';
import { useAppContext } from '../Context/context';
import { db } from '../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { LogBox } from 'react-native';

const MyFavoritesScreen = ({ navigation }) => {

    const { state, dispatch } = useAppContext();
    const handleProductPress = (product) => {
        navigation.navigate('ProductDetail', { product });
    };

    const loadFavorite = async () => {
        try {
            const purchasesQuery = query(collection(db, 'favorites'), where("userId", "==", state.user));
            const purchasesSnapshot = await getDocs(purchasesQuery);

            const purchasesData = purchasesSnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id, 
                    name: data.name,
                    image: data.image,
                    description: data.description,
                    valueProduct: data.valueProduct,
                };
            });

            dispatch({ type: 'SET_PRODUCTS', payload: purchasesData });
        } catch (error) {
            Alert.alert('Error', 'Error al cargar los favoritos: ' + error.message);
            console.log(error);
        }
    };

    useEffect(() => {
        loadFavorite();
    }, []);

    const renderProduct = ({ item }) => (
        <Pressable style={myPurchasesStyles.productContainer} onPress={() => handleProductPress(item)}>
            <Image source={{ uri: item.image }} style={myPurchasesStyles.productImage} resizeMode="contain" />
            <View style={myPurchasesStyles.productDetails}>
                <Text style={myPurchasesStyles.productName}>{item.name}</Text>
                <Text style={myPurchasesStyles.productDescription}>{item.description}</Text>
                <Text style={myPurchasesStyles.productValue}>{item.valueProduct}</Text>
            </View>
        </Pressable>
    );

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