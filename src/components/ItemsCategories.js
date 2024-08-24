import React from 'react';
import { View, Button } from 'react-native';
import CategoriesTelevision from '../components/CategoriesTelevision';
import CategoriesMovils from '../components/CategoriesMovils';
import CategoriesLaptop from '../components/CategoriesLaptop';
import CategoriesHeadphones from '../components/CategoriesHeadphones';
import CategoriesCamera from '../components/CategoriesCamera';
import categoriesCameraStyles from '../styles/categoriesCameraStyles';

const ItemsCategories = ({ navigation }) => {
    return (
        <View style={categoriesCameraStyles.container}>
            <Button style={categoriesCameraStyles.itemText} title="Television" onPress={() => navigation.navigate('CategoriesTelevision')} />
            <Button style={categoriesCameraStyles.itemText} title="Telefonos Moviles" onPress={() => navigation.navigate('CategoriesMovils')} />
            <Button style={categoriesCameraStyles.itemText} title="Computadores" onPress={() => navigation.navigate('CategoriesLaptop')} />
            <Button style={categoriesCameraStyles.itemText} title="Auriculares" onPress={() => navigation.navigate('CategoriesHeadphones')} />
            <Button style={categoriesCameraStyles.itemText} title="Camaras" onPress={() => navigation.navigate('CategoriesCamera')} />
        </View>
    );
};

export default ItemsCategories;
