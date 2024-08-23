import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import offersStyles from '../styles/offersStyles';

const Offers = () => {
    const [productList, setProductList] = useState([]);

    const theOffers = () => {
        const offersList = [
            { id: '1', title: 'Smartphone Galaxy S21',description:'Móvil con pantalla de 6.2 pulgadas, 128 GB .',worth:'$3,200,000 COP',discount:'5%',totalValue:'$3,040,000 COP', image:require('../image/SmartphoneGalaxyS21.jpg')},
            { id: '2', title: 'Laptop Dell XPS 13',description:'Portátil de 13.3 pulgadas, Intel i7 y 16 GB de RAM.',worth:'$4,800,000 COP',discount:'20%',totalValue:'$3,840,000 COP', image:require('../image/LaptopDellXPS13.jpg')},
            { id: '3', title: 'Audífonos Bose QuietComfort 35',description:'Auriculares inalámbricos con cancelación de ruido, hasta 20 horas de batería.',worth:'$1,400,000 COP',discount:'30%',totalValue:'$980,000 COP', image:require('../image/AudífonosBoseQuietComfort35.jpg')},
            { id: '4', title: 'Smart TV LG OLED55CXPUA1',description:'Televisor OLED de 55 pulgadas con resolución 4K y HDR.',worth:'$6,000,000 COP',discount:'35%',totalValue:'$3,900,000 COP', image:require('../image/SmartTVLGOLED55CXPUA1.jpg')},
            { id: '5', title: 'Sony Alpha A7 III',description:'Cámara sin espejo con sensor full-frame de 24.2 MP, grabación de video 4K,.',worth:'$10,000,000 COP',discount:'20 %',totalValue:'$8,000,000 COP', image:require('../image/SonyAlphaA7 III.jpg')},

        ];
        setProductList(offersList);
    };

    useEffect(() => {
        theOffers();
    }, []);

    return (
        <View style={offersStyles.container}>
            <Text style={offersStyles.firstTitle}>Mis Favoritos</Text>
            <FlatList
                data={productList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={offersStyles.itemContainer}>
                      
                    <Image style={offersStyles.itemImage} source={item.image} />
                    <Text style={offersStyles.itemText}>{item.title}</Text>
                    <Text style={offersStyles.itemDescription} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
                    <Text style={offersStyles.itemLetters}>Valor Original: {item.worth}</Text>
                    <Text style={offersStyles.itemLetters}>Descuento: {item.discount}</Text>
                    <Text style={offersStyles.itemLetters}>Valor con Descuento: {item.totalValue}</Text>

                </View>
                )}
            />
        </View>
    );
};

export default Offers;