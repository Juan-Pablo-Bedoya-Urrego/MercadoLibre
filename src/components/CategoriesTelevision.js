import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import categoriesTelevisionStyles from '../styles/categoriesTelevisionStyles';

const CategoriesTelevision = () => {
    const [productList, setProductList] = useState([]);

    const television = () => {
        const televisionList = [
            { id: '4', title: 'Smart TV LG OLED55CXPUA1',description:'Televisor OLED de 55 pulgadas con 4K y HDR.', image:require('../image/SmartTVLGOLED55CXPUA1.jpg')},
            { id: '3', title: 'Sony A90J OLED',description:'Es un televisor de 65 pulgadas con panel OLED.', image:require('../image/SonyA90JOLED.jpg')},
            { id: '2', title: 'Samsung QN90B Neo QLED',description:'De 55 pulgadas utiliza retroiluminación Mini LED.',image:require('../image/SamsungQN90BNeoQLED.jpg')},
            { id: '4', title: 'TCL 6-Series R655',description:'Un televisor QLED de 55 pulgadas con retroiluminación Mini LED. ', image:require('../image/TCL6-SeriesR655.jpg')},
            { id: '5', title: 'Philips 65OLED803',description:'Un televisor OLED de 65 pulgadas con tecnología Ambilight.', image:require('../image/Philips65OLED803.jpg')},

        ];
        setProductList(televisionList);
    };

    useEffect(() => {
        television();
    }, []);

    return (
        <View style={categoriesTelevisionStyles.container}>
            <Text style={categoriesTelevisionStyles.firstTitle}>Televisores</Text>
            <FlatList
                data={productList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={categoriesTelevisionStyles.itemContainer}>
                    <Text style={categoriesTelevisionStyles.itemText}>{item.title}</Text>
                    <Image style={categoriesTelevisionStyles.itemImage} source={item.image} />
                    <Text style={categoriesTelevisionStyles.itemDescription} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
                </View>
                )}
            />
        </View>
    );
};

export default CategoriesTelevision;