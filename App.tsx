import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/componets/HomeScreen';
import LoginScreen from './src/componets/LoginScreen';
import RegisterScreen from './src/componets/RegisterScreen';
import BranchPaymentScreen from './src/componets/BranchPaymentScreen';
import CartShoppingScreen from './src/componets/CartShoppingScreen';
import ProductDetailScreen from './src/componets/ProductDetailScreen';
import ProfileScreen from './src/componets/ProfileScreen';
import OffersScreen from './src/componets/OffersScreen';
import MyPurchasesScreen from './src/componets/MyPurchasesScreen';
import MyFavoritesScreen from './src/componets/MyFavoritesScreen';
import ItemsCategoriesScreen from './src/componets/ItemsCategoriesScreen';
import HelpAndSupportScreen from './src/componets/HelpAndSupportScreen';
import CategoriesTelevisionScreen from './src/componets/CategoriesTelevisionScreen';
import CategoriesMovilsScreen from './src/componets/CategoriesMovilsScreen';
import CategoriesCameraScreen from './src/componets/CategoriesCameraScreen';
import CategoriesHeadphonesScreen from './src/componets/CategoriesHeadphonesScreen';
import CategoriesLaptopScreen from './src/componets/CategoriesLaptopScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='CartShopping' component={CartShoppingScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='branchPayment' component={BranchPaymentScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='ProductDetail' component={ProductDetailScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='offers' component={OffersScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='purchases' component={MyPurchasesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='favorite' component={MyFavoritesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Items' component={ItemsCategoriesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Support' component={HelpAndSupportScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='CategoriesTelevisionScreen' component={CategoriesTelevisionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='CategoriesMovils' component={CategoriesMovilsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='CategoriesLaptop' component={CategoriesLaptopScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='CategoriesHeadphones' component={CategoriesHeadphonesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='CategoriesCamera' component={CategoriesCameraScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
