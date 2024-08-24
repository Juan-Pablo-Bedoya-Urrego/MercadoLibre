import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import categoriesHeadphonesStyles from '../styles/categoriesHeadphonesStyles';

const CategoriesHeadphones = () => {
    const [productList, setProductList] = useState([]);

    const headphones = () => {
        const headphonesList = [
            { id: '1', title: 'Audífonos Bose QuietComfort 35',description:'Auriculares inalámbricos con cancelación de ruido, hasta 20 horas de batería.',worth:'$1,400,000 COP',discount:'30%',totalValue:'$980,000 COP', image:require('../image/AudífonosBoseQuietComfort35.jpg')},
            { id: '2', title: 'Sony WH-1000XM5',description:'Son auriculares inalámbricos de gama alta. ',status:'Disponible',image:require('../image/SonyWH-1000XM5.jpg')},
            { id: '3', title: 'Apple AirPods Pro (2ª generación)',description:'Ofrecen cancelación activa de ruido y modo de transparencia.', image:require('../image/AppleAirPodsPro(2ªgeneración).jpg')},
            { id: '4', title: 'Sennheiser Momentum 4 Wireless',description:'Cuentan con una excelente cancelación de ruido y una calidad de sonido.', image:require('../image/SennheiserMomentum4Wireless.jpg')},
            { id: '5', title: 'Jabra Elite 85h',description:'Tienen una duración de batería de hasta 36 horas y son resistentes al agua.', image:require('../image/JabraElite85h.jpg')},

        ];
        setProductList(headphonesList);
    };

    useEffect(() => {
        headphones();
    }, []);

    return (
        <View style={categoriesHeadphonesStyles.container}>
            <Text style={categoriesHeadphonesStyles.firstTitle}>Auriculares</Text>
            <FlatList
                data={productList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={categoriesHeadphonesStyles.itemContainer}>
                    <Text style={categoriesHeadphonesStyles.itemText}>{item.title}</Text>
                    <Image style={categoriesHeadphonesStyles.itemImage} source={item.image} />
                    <Text style={categoriesHeadphonesStyles.itemDescription} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
                </View>
                )}
            />
        </View>
    );
};

export default CategoriesHeadphones;