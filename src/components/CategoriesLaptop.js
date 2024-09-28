import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import categoriesLaptopStyles from '../styles/categoriesLaptopStyles';

const CategoriesLaptop = () => {
    const [productList, setProductList] = useState([]);

    const laptops = () => {
        const laptopsList = [
            { id: '1', title: 'Laptop Dell XPS 13',description:'Portátil de 13.3 pulgadas, Intel i7 y 16 GB de RAM.', image:require('../image/LaptopDellXPS13.jpg')},
            { id: '2', title: 'Dell XPS 13 Plus ',description:'Una pantalla InfinityEdge de 13.4 pulgadas, procesador Intel Core i7 de 13ª.',image:require('../image/DellXPS1Plus.jpg')},
            { id: '3', title: 'HP Envy x360 15',description:' Una laptop convertible 2 en 1 con pantalla táctil OLED de 15.6 pulgadas.', image:require('../image/HPEnvyx36015.jpg')},
            { id: '4', title: 'Lenovo Legion 5 Pro',description:'Es una laptop para juegos con una pantalla WQXGA de 16 pulgadas.', image:require('../image/LenovoLegion5Pro.jpg')},
            { id: '5', title: 'Acer Swift X (SFX14-41G)',description:'Una pantalla AMOLED de 6.78 pulgadas, un procesador Dimensity 8200,.', image:require('../image/AcerSwiftX(SFX14-41G).jpg')},

        ];
        setProductList(laptopsList);
    };

    useEffect(() => {
        laptops();
    }, []);

    return (
        <View style={categoriesLaptopStyles.container}>
            <Text style={categoriesLaptopStyles.firstTitle}>Computadores Portatiles</Text>
            <FlatList
                data={productList}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <View style={categoriesLaptopStyles.itemContainer}>
                    <Text style={categoriesLaptopStyles.itemText}>{item.title}</Text>
                    <Image style={categoriesLaptopStyles.itemImage} source={item.image} />
                    <Text style={categoriesLaptopStyles.itemDescription} numberOfLines={2} ellipsizeMode='tail'>{item.description}</Text>
                </View>
                )}
            />
        </View>
    );
};

export default CategoriesLaptop;