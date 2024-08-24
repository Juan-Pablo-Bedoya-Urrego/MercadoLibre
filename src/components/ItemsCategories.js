import React from 'react';
import { View, Button } from 'react-native';
import CategoriesTelevision from '../components/CategoriesTelevision';
import CategoriesMovils from '../components/CategoriesMovils';
import CategoriesLaptop from '../components/CategoriesLaptop';
import CategoriesHeadphones from '../components/CategoriesHeadphones';
import CategoriesCamera from '../components/CategoriesCamera';
import itemsCategoriesStyles from '../styles/itemsCategoriesStyles';


const ItemsCategories = ({ navigation }) => {
    return (
        <View style={itemsCategoriesStyles.container}>
            <View style={itemsCategoriesStyles.buttonContainer}>
                <Button
                    color={itemsCategoriesStyles.button.backgroundColor}
                    title="Television"
                    onPress={() => navigation.navigate('CategoriesTelevision')}
                />
            </View>
            <View style={itemsCategoriesStyles.buttonContainer}>
                <Button
                    color={itemsCategoriesStyles.button.backgroundColor}
                    title="Telefonos Moviles"
                    onPress={() => navigation.navigate('CategoriesMovils')}
                />
            </View>
            <View style={itemsCategoriesStyles.buttonContainer}>
                <Button
                    color={itemsCategoriesStyles.button.backgroundColor}
                    title="Computadores"
                    onPress={() => navigation.navigate('CategoriesLaptop')}
                />
            </View>
            <View style={itemsCategoriesStyles.buttonContainer}>
                <Button
                    color={itemsCategoriesStyles.button.backgroundColor}
                    title="Auriculares"
                    onPress={() => navigation.navigate('CategoriesHeadphones')}
                />
            </View>
            <View style={itemsCategoriesStyles.buttonContainer}>
                <Button
                    color={itemsCategoriesStyles.button.backgroundColor}
                    title="Camaras"
                    onPress={() => navigation.navigate('CategoriesCamera')}
                />
            </View>
        </View>
    );
};

export default ItemsCategories;