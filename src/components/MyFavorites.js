import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import myFavoriteStyles from '../styles/myFavoriteStyles';

const MyFavorites = () => {
    const [productList, setProductList] = useState([]);

    const favorites = () => {
        const favoritesList = [
            { id: '1', title: 'Apple iPhone 15 pro max',description:'Un sistema de cámaras avanzado con sensores.',status:'Disponible',image:require('../image/iPhone.jpg')},
            { id: '2', title: 'Canon EOS R5:',description:'Es una cámara sin espejo de alto rendimiento. ',status:'No disponible',image:require('../image/Camara.jpg')},
            { id: '3', title: 'Sony WH-1000XM5',description:'Son auriculares inalámbricos de gama alta. ',status:'Disponible',image:require('../image/SonyWH-1000XM5.jpg')},
        ];
        setProductList(favoritesList);
    };

    useEffect(() => {
        favorites();
    }, []);

    return (
        <View style={myFavoriteStyles.container}>
            <Text style={myFavoriteStyles.firstTitle}>Mis Favoritos</Text>
            <FlatList
                data={productList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={myFavoriteStyles.itemContainer}>
                    <Text style={myFavoriteStyles.itemText}>{item.title}</Text>
                    <Image style={myFavoriteStyles.itemImage} source={item.image} />
                    <Text style={myFavoriteStyles.itemDescription} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
                    <Text style={myFavoriteStyles.itemStatus}>{item.status}</Text>
                </View>
                )}
            />
        </View>
    );
};

export default MyFavorites;