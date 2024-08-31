import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import myPurchasesStyles from '../styles/myPurchasesStyles';

const MyPurchasesScreen = ({ navigation }) => {
    const [productList, setProductList] = useState([
        { id: '1', title: 'Google Pixel 8', description: 'Su cámara principal de 50 MP y imágenes avanzado.', status: 'En tránsito', image: require('../img/GooglePixel8.jpg') },
        { id: '2', title: 'Sony A90J OLED', description: 'Es un televisor de 65 pulgadas con panel OLED.', status: 'Cancelado', image: require('../img/SonyA90JOLED.jpg') },
        { id: '3', title: 'Nikon Z9', description: 'Una cámara sin espejo de formato completo.', status: 'Entregado', image: require('../img/NikonZ9.jpg') },
    ]);

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

    return (
        <View style={myPurchasesStyles.container}>
            <Text style={myPurchasesStyles.firstTitle}>Mis Compras</Text>
            <FlatList
                data={productList}
                keyExtractor={(item) => item.id}
                renderItem={renderProduct}
            />
        </View>
    );
};

export default MyPurchasesScreen;