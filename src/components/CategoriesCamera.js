import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import categoriesCameraStyles from '../styles/categoriesCameraStyles';

const CategoriesCamera = () => {
    const [productList, setProductList] = useState([]);

    const camera = () => {
        const cameraList = [
            { id: '1', title: 'Sony Alpha A7 III',description:'Cámara sin espejo con sensor full-frame de 24.2 MP, grabación de video 4K.', image:require('../image/SonyAlphaA7III.jpg')},
            { id: '2', title: 'Nikon Z9',description:'Una cámara sin espejo de formato completo.', image:require('../image/NikonZ9.jpg')},
            { id: '2', title: 'Canon EOS R5:',description:'Es una cámara sin espejo de alto rendimiento.',image:require('../image/Camara.jpg')},
            { id: '4', title: 'Fujifilm X-H2S',description:'Una cámara sin espejo con un sensor APS-C de 26.1 MP.', image:require('../image/FujifilmX-H2S.jpg')},
            { id: '5', title: 'Leica SL2',description:'Una cámara sin espejo de formato completo con un sensor de 47.3 MP .', image:require('../image/LeicaSL2.jpg')},

        ];
        setProductList(cameraList);
    };

    useEffect(() => {
        camera();
    }, []);

    return (
        <View style={categoriesCameraStyles.container}>
            <Text style={categoriesCameraStyles.firstTitle}>Camaras Profesionales</Text>
            <FlatList
                data={productList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={categoriesCameraStyles.itemContainer}>
                    <Text style={categoriesCameraStyles.itemText}>{item.title}</Text>
                    <Image style={categoriesCameraStyles.itemImage} source={item.image} />
                    <Text style={categoriesCameraStyles.itemDescription} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
                </View>
                )}
            />
        </View>
    );
};

export default CategoriesCamera;