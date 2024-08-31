import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TextInput, Pressable } from 'react-native';
import categoryStyles from '../styles/categoryStyles';


const CategoryScreen = ({ route, navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { products = [] } = route.params || {}; 

    const handleProductPress = (product) => {
        navigation.navigate('ProductDetail', { product });
    };

    console.log('Products:', products);

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
            <Image source={item.image} style={categoryStyles.productImage} resizeMode="contain" />
            <View style={categoryStyles.productDetails}>
                <Text style={categoryStyles.productName}>{item.name}</Text>
                <Text style={categoryStyles.productDescription}>{item.description}</Text>
                <Text style={categoryStyles.productValue}>${item.valueProduct}</Text>
            </View>
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