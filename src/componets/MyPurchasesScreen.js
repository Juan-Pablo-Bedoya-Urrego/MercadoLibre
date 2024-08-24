import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import myPurchasesStyles from '../styles/myPurchasesStyles';

const MyPurchasesScreen = () => {
    const [productList, setProductList] = useState([]);

    const buy = () => {
        const purchasesList = [
            { id: '1', title: 'Google Pixel 8', description: 'Su cámara principal de 50 MP y imágenes avanzado.', status: 'En tránsito', image: require('../img/GooglePixel8.jpg') },
            { id: '2', title: 'Sony A90J OLED', description: 'Es un televisor de 65 pulgadas con panel OLED.', status: 'Cancelado', image: require('../img/SonyA90JOLED.jpg') },
            { id: '3', title: 'Nikon Z9', description: 'Una cámara sin espejo de formato completo.', status: 'Entregado', image: require('../img/NikonZ9.jpg') },
        ];
        setProductList(purchasesList);
    };

    useEffect(() => {
        buy();
    }, []);

    return (
        <View style={myPurchasesStyles.container}>
            <Text style={myPurchasesStyles.firstTitle}>Mis Compras</Text>
            <FlatList
                data={productList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={myPurchasesStyles.itemContainer}>
                        <Text style={myPurchasesStyles.itemText}>{item.title}</Text>
                        <Image style={myPurchasesStyles.itemImage} source={item.image} />
                        <Text style={myPurchasesStyles.itemDescription} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
                        <Text style={myPurchasesStyles.itemStatus}>{item.status}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default MyPurchasesScreen;