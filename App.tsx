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
import HelpAndSupportScreen from './src/componets/HelpAndSupportScreen';
import CategoryScreen from './src/componets/CategoryScreen';
import { AppProvider } from './src/Context/context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>  
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='CartShopping' component={CartShoppingScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='BranchPayment' component={BranchPaymentScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='ProductDetail' component={ProductDetailScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Offers' component={OffersScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Purchases' component={MyPurchasesScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Favorites' component={MyFavoritesScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Support' component={HelpAndSupportScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Category' component={CategoryScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
