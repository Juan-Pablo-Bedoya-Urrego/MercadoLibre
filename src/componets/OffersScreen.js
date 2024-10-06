import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Pressable, ActivityIndicator } from 'react-native';
import offersStyles from "../styles/offersStyles";
import { useAppContext } from '../Context/context';

const OffersScreen = ({ navigation }) => {
    const { state, dispatch } = useAppContext();
    const [loading, setLoading] = useState(true);

    const fetchOffers = () => {
        const offersList = [
            { id: '1', title: 'Smartphone Galaxy S21', description: 'Móvil con pantalla de 6.2 pulgadas, 128 GB.', worth: '$3,200,000 COP', discount: '5%', totalValue: '$3,040,000 COP', image: require('../img/SmartphoneGalaxyS21.jpg') },
            { id: '2', title: 'Laptop Dell XPS 13', description: 'Portátil de 13.3 pulgadas, Intel i7 y 16 GB de RAM.', worth: '$4,800,000 COP', discount: '20%', totalValue: '$3,840,000 COP', image: require('../img/LaptopDellXPS13.jpg') },
            { id: '3', title: 'Audífonos Bose QuietComfort 35', description: 'Auriculares inalámbricos con cancelación de ruido, hasta 20 horas de batería.', worth: '$1,400,000 COP', discount: '30%', totalValue: '$980,000 COP', image: require('../img/AudífonosBoseQuietComfort35.jpg') },
            { id: '4', title: 'Smart TV LG OLED55CXPUA1', description: 'Televisor OLED de 55 pulgadas con resolución 4K y HDR.', worth: '$6,000,000 COP', discount: '35%', totalValue: '$3,900,000 COP', image: require('../img/SmartTVLGOLED55CXPUA1.jpg') },
        ];

        dispatch({ type: 'SET_PRODUCTS', payload: offersList });
        setLoading(false); 
    };

    useEffect(() => {
        fetchOffers();
    }, []);

    const handleOfferPress = (offer) => {
        navigation.navigate('ProductDetail', { offer});
    };

    const renderOffer = ({ item }) => (
        <Pressable style={offersStyles.productContainer} onPress={() => handleOfferPress(item)}>
            <Image style={offersStyles.productImage} source={item.image} resizeMede ="contain"/>
            <View style={offersStyles.productDetails}>
                <Text style={offersStyles.itemText}>{item.title}</Text>
                <Text style={offersStyles.itemDescription} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
                <Text style={offersStyles.itemLetters}>Valor Original: {item.worth}</Text>
                <Text style={offersStyles.itemLetters}>Descuento: {item.discount}</Text>
                <Text style={offersStyles.itemLetters}>Valor con Descuento: {item.totalValue}</Text>
            </View>
        </Pressable>
    );

    if (loading) {
        return (
            <View style={offersStyles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Cargando ofertas...</Text>
            </View>
        );
    }

    return (
        <View style={offersStyles.container}>
            <Text style={offersStyles.firstTitle}>Mis Ofertas</Text>
            <FlatList
                data={state.productList}
                keyExtractor={(item) => item.id}
                renderItem={renderOffer}
            />
        </View>
    );
};

export default OffersScreen;
