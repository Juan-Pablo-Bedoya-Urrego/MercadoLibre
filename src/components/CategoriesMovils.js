import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import categoriesMovilStyles from '../styles/categoriesMovilStyles';

const CategoriesMovils = () => {
    const [productList, setProductList] = useState([]);

    const movil = () => {
        const movilsList = [
            { id: '1', title: 'Google Pixel 8',description:'Su cámara principal de 50 MP y imágenes avanzado.', image:require('../image/GooglePixel8.jpg')},
            { id: '2', title: 'Apple iPhone 15 pro max',description:'Un sistema de cámaras avanzado con sensores.',image:require('../image/iPhone.jpg')},
            { id: '3', title: 'Smartphone Galaxy S21',description:'Móvil con pantalla de 6.2 pulgadas, 128 GB .', image:require('../image/SmartphoneGalaxyS21.jpg')},
            { id: '4', title: 'Motorola Edge 40 Pro',description:'Una pantalla OLED de 6.67 pulgadas con resolución Full HD+ .', image:require('../image/MotorolaEdge40Pro.jpg')},
            { id: '5', title: 'Vivo V27 Pro',description:'Una pantalla AMOLED de 6.78 pulgadas, un procesador Dimensity 8200,.', image:require('../image/VivoV27Pro.jpg')},

        ];
        setProductList(movilsList);
    };

    useEffect(() => {
        movil();
    }, []);

    return (
        <View style={categoriesMovilStyles.container}>
            <Text style={categoriesMovilStyles.firstTitle}>Télefonos Moviles</Text>
            <FlatList
                data={productList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={categoriesMovilStyles.itemContainer}>
                    <Text style={categoriesMovilStyles.itemText}>{item.title}</Text>
                    <Image style={categoriesMovilStyles.itemImage} source={item.image} />
                    <Text style={categoriesMovilStyles.itemDescription} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
                </View>
                )}
            />
        </View>
    );
};

export default CategoriesMovils;