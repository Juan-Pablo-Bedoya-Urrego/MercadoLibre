import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, FlatList, Image, TextInput, Pressable } from 'react-native';
import categoryStyles from '../styles/categoryStyles';
import { useAppContext } from '../Context/context';

const CategoryScreen = ({ route, navigation }) => {
    const { products = [] } = route.params || {};
    const {state,dispatch}=useAppContext();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
        dispatch({ type: 'SET_FILTERED_PRODUCTS', payload: filtered });
        setLoading(false);
    }, [state.searchQuery, products]);

    const handleProductPress = (product) => {
        navigation.navigate('ProductDetail', { product });
    };

    const renderHeader = () => (
        <View style={categoryStyles.header}>
            <View style={categoryStyles.searchBarContainer}>
                <TextInput
                    style={categoryStyles.searchInput}
                    placeholder="Buscar productos..."
                    value={state.searchQuery}
                    onChangeText={(text) => dispatch({ type: 'SET_SEARCH_QUERY', payload: text })}
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
            <Image source={item.image} style={categoryStyles.productImage} resizeMode="contain" />
            <View style={categoryStyles.productDetails}>
                <Text style={categoryStyles.productName}>{item.name}</Text>
                <Text style={categoryStyles.productDescription}>{item.description}</Text>
                <Text style={categoryStyles.productValue}>${item.valueProduct}</Text>
            </View>
        </Pressable>
    );

    if (loading) {
        return (
            <View style={categoryStyles.containerMain}>
                <Text>Cargando productos...</Text>
            </View>
        );
    }

    return (
        <View style={categoryStyles.containerMain}>
            {renderHeader()}
            <View style={categoryStyles.container}>
                <FlatList
                    data={state.filteredProducts}
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