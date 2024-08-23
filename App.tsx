import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/componets/HomeScreen';
import LoginScreen from './src/componets/LoginScreen';
import RegisterScreen from './src/componets/RegisterScreen';
import BranchPaymentScreen from './src/componets/BranchPaymentScreen';
import CartShoppingScreen from './src/componets/CartShoppingScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
