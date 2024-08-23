import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, FlatList, Alert } from "react-native";
import HomeStyles from "../styles/homeStyles";

const HomeScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([
        { id: '1', image: require('../img/tecladoMouse.jpg'), name: 'Combo teclado mouse economico', description: 'Teclado y mouse de alta calidad', valueProduct: '1000000', amount: '1' },
        { id: '2', image: require('../img/kz.webp'), name: 'Audífonos especiales para gaming', description: 'Audífonos con sonido envolvente', valueProduct: '5200000', amount: '1' },
        { id: '3', image: require('../img/monitor.webp'), name: 'Monitor LED 24"', description: 'Monitor Full HD de 24 pulgadas ideal para jugar', valueProduct: '1500000', amount: '1' },
        { id: '4', image: require('../img/ratonErgonomico.webp'), name: 'Ratón ergonómico', description: 'Ratón con diseño ergonómico para largas sesiones', valueProduct: '300000', amount: '1' },
        { id: '5', image: require('../img/tecladoRBG.jpg'), name: 'Teclado mecánico RGB', description: 'Teclado mecánico con retroiluminación RGB', valueProduct: '1200000', amount: '1' },
        { id: '6', image: require('../img/sillaGamer.jpeg'), name: 'Silla gamer', description: 'Silla ergonómica para gamers', valueProduct: '3500000', amount: '1' },
        { id: '7', image: require('../img/camaraWeb.webp'), name: 'Webcam HD', description: 'Webcam HD con micrófono incorporado', valueProduct: '800000', amount: '1' },
        { id: '8', image: require('../img/hubUSB.webp'), name: 'Hub USB 3.0', description: 'Hub USB 3.0 de 4 puertos', valueProduct: '200000', amount: '1' },
        { id: '9', image: require('../img/microfono.webp'), name: 'Micrófono de estudio', description: 'Micrófono de condensador para grabación de audio', valueProduct: '2200000', amount: '1' },
        { id: '10', image: require('../img/alfrombrilla.jpg'), name: 'Alfombrilla para teclado', description: 'Alfombrilla grande para teclado y ratón', valueProduct: '150000', amount: '1' },
    ]);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleProductPress = (product) => {
        Alert.alert(
            'Información del Producto',
            `Nombre: ${product.name}\nDescripción: ${product.description}\nValor: $${product.valueProduct}`,
            [{ text: 'OK' }]
        );
    };

    const renderProduct = ({ item }) => (
        <Pressable style={HomeStyles.productContainer} onPress={() => handleProductPress(item)}>
            <Image source={item.image} style={HomeStyles.productImage} resizeMode="contain" />
            <View style={HomeStyles.productDetails}>
                <Text style={HomeStyles.productName}>{item.name}</Text>
                <Text style={HomeStyles.productDescription}>{item.description}</Text>
                <Text style={HomeStyles.productValue}>${item.valueProduct}</Text>
            </View>
        </Pressable>
    );
    const renderHeader = () => (
        <View style={HomeStyles.header}>
            <View style={HomeStyles.searchBarContainer}>
                <TextInput
                    style={HomeStyles.searchInput}
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />
                <Pressable style={HomeStyles.iconButton} onPress={() => navigation.navigate('CartShopping')}>
                    <Image
                        source={require('../img/carritocompras.png')}
                        style={HomeStyles.icon}
                    />
                </Pressable>
            </View>
            <Pressable style={HomeStyles.iconButton} onPress={() => navigation.navigate('Login')}>
                <Image
                    source={require('../img/acceso.png')}
                    style={HomeStyles.icon}
                />
            </Pressable>
        </View>
    );
    return (
        <View style={HomeStyles.containerMain}>
            {renderHeader()}
            <View style={HomeStyles.container}>
                <FlatList
                    data={filteredProducts}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                    style={HomeStyles.flatListContent}
                    ListFooterComponent={<View style={HomeStyles.footerSpacing} />}
                />
            </View>
        </View>
    );
};

export default HomeScreen;