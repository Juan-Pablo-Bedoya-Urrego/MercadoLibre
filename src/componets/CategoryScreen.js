import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, FlatList, Image, TextInput, Pressable, ToastAndroid, Platform } from 'react-native';
import categoryStyles from '../styles/categoryStyles';
import { useAppContext } from "../Context/context";
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const CategoryScreen = ({ route, navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const { products = [] } = route.params || {};
    const { state, dispatch } = useAppContext();


    const handleAddToCart = (item) => {
        dispatch({ type: 'ADD_PRODUCT', payload: item });
        if (Platform.OS === 'android') {
            ToastAndroid.show(`${item.name} ha sido agregado al carrito`, ToastAndroid.SHORT);
        } else {
            Alert.alert("Producto agregado", `${item.name} ha sido agregado al carrito.`);
        }
    };


    const handleProductPress = (product) => {
        navigation.navigate('ProductDetail', { product });
    };

    const handleAddToFavorites = async (item) => {
        if (state.user) { 
            ToastAndroid.show(`${item.name} ha sido agregado a tus favoritos.`, ToastAndroid.SHORT);
            try {
                const favoriteData = {
                    userId: state.user, 
                    productId: item.id, 
                    name: item.name,
                    image: item.image,
                    description: item.description,
                    valueProduct: item.valueProduct,
                };

                await addDoc(collection(db, 'favorites'), favoriteData); 

            } catch (error) {
                console.log('Error al agregar a favoritos: ', error);
            }
        } else {
            ToastAndroid.show(`Debes iniciar sesión para agregar a favoritos.`, ToastAndroid.SHORT);
        }
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderHeader = () => (
        <View style={categoryStyles.header}>
            <View style={categoryStyles.searchBarContainer}>
                <TextInput
                    style={categoryStyles.searchInput}
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />
                <Pressable style={categoryStyles.iconButton} onPress={() => navigation.navigate('CartShopping')}>
                    <Image
                        source={require('../img/carritocompras.png')}
                        style={categoryStyles.icon}
                    />
                </Pressable>
            </View>
            <Pressable style={categoryStyles.iconButton} onPress={() => navigation.navigate('Login')}>
                <Image
                    source={require('../img/entrar.png')}
                    style={categoryStyles.icon}
                />
            </Pressable>
            <Pressable style={categoryStyles.iconButton} onPress={() => navigation.navigate('Profile')}>
                <Image
                    source={require('../img/acceso.png')}
                    style={categoryStyles.icon}
                />
            </Pressable>
        </View>
    );

    const renderProduct = ({ item }) => (
        <Pressable style={categoryStyles.productContainer} onPress={() => handleProductPress(item)}>
            <Image source={{ uri: item.image }} style={categoryStyles.productImage} resizeMode="contain" />
            <View style={categoryStyles.productDetails}>
                <Text style={categoryStyles.productName}>{item.name}</Text>
                <Text style={categoryStyles.productDescription}>{item.description}</Text>
                <Text style={categoryStyles.productValue}>${item.valueProduct}</Text>
            </View>
            <Pressable style={categoryStyles.cartButton} onPress={() => handleAddToCart(item)}>
                <Text style={categoryStyles.cartButtonText}>🛒</Text>
            </Pressable>
            <Pressable style={categoryStyles.favoriteButton} onPress={() => handleAddToFavorites(item)}>
                <Text style={categoryStyles.favoriteButtonText}>❤️</Text>
            </Pressable>
        </Pressable>
    );

    return (
        <View style={categoryStyles.containerMain}>
            {renderHeader()}
            <View style={categoryStyles.container}>
                <FlatList
                    data={filteredProducts}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                    style={categoryStyles.flatListContent}
                    ListFooterComponent={<View style={categoryStyles.footerSpacing} />}
                />
            </View>
        </View>
    );
};

export default CategoryScreen;
