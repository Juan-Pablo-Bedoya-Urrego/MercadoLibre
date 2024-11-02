import React, { useState, useEffect, useReducer } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Pressable, Image, FlatList, ToastAndroid, Platform } from "react-native";
import globalStyles from "../styles/globlaStyles";
import profileStyles from "../styles/profileStyles";
import cardProductsStyles from "../styles/cardProductsStyles";
import { useAppContext } from "../Context/context";

const CartShoppingScreen = ({ navigation }) => {

  const { state, dispatch } = useAppContext();
  const [userValidate, setUserValidate] = useState(true);

  const removeProduct = (item) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: item.id });
    if (Platform.OS === 'android') {
      ToastAndroid.show(`${item.name} ha sido elminado del carrito`, ToastAndroid.SHORT);
    } else {
      Alert.alert("Producto agregado", `${item.name} ha sido agregado al carrito.`);
    }
  };

  const updateProduct = (item, value) => {
    const id = item.id;
    dispatch({ type: 'UPDATE_AMOUNT', payload: { id, value } });
    if (value != 1) {
      if (Platform.OS === 'android') {
        ToastAndroid.show(`${item.name} ha sido actualizada la cantidad`, ToastAndroid.SHORT);
      }
    }
  };

  if (!userValidate) {
    return (
        <View style={profileStyles.noUserContainer}>
            <Image
                source={require('../img/acceso.png')} 
                style={profileStyles.noUserImage}
            />
            <Text style={profileStyles.firstTitle}>
                ¡Hola!
            </Text>
            <Text style={profileStyles.text}>
                Por favor, inicia sesión o regístrate para acceder al pago y disfrutar de todas nuestras funciones.
            </Text>
            <Pressable
                style={profileStyles.noUserButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={profileStyles.buttonText}>Iniciar Sesión</Text>
            </Pressable>
        </View>
    );
}

  const handlePayment = () => {
    if (state.products.length > 0) {
      if (!state.user) {
        setUserValidate(false);
      } else {
        navigation.navigate('BranchPayment');
      }
    } else {
      if (Platform.OS === 'android') {
        ToastAndroid.show("El carrito está vacío", ToastAndroid.SHORT);
      } else {
        Alert.alert("Carrito vacío", "Agrega productos antes de continuar al pago.");
      }
    }
  };

  const totalValue = state.products.reduce(
    (total, product) => total + parseInt(product.valueProduct) * parseInt(product.amount),
    0
  );

  const renderProductControls = (item) => {
    return (
      <View style={cardProductsStyles.quantityContainer}>
        <Pressable
          style={cardProductsStyles.button}
          onPress={() => updateProduct(item, String(Math.max((parseInt(item.amount) || 1) - 1, 1)))}
        >
          <Text style={cardProductsStyles.buttonText}>-</Text>
        </Pressable>
        <TextInput
          style={cardProductsStyles.inputAmount}
          placeholder="Cantidad"
          keyboardType="numeric"
          maxLength={2}
          value={item.amount}
          onChangeText={(text) => updateProduct(item, text)}
        />
        <Pressable
          style={cardProductsStyles.button}
          onPress={() => updateProduct(item, String((parseInt(item.amount) || 0) + 1))}
        >
          <Text style={cardProductsStyles.buttonText}>+</Text>
        </Pressable>
      </View>
    );
  };

  const renderButtonDelete = (item) => (
    <Pressable
      style={cardProductsStyles.clearButton}
      onPress={() => removeProduct(item)}
    >
      <Image
        source={require('../img/borrar.png')}
        style={cardProductsStyles.icon} />
    </Pressable>
  );

  const renderDescriptionProduct = (item) => (
    <View style={cardProductsStyles.containerText}>
      <Text style={cardProductsStyles.label}>Descripción: {item.description}</Text>
      <Text style={cardProductsStyles.label}>Valor: ${item.valueProduct}</Text>
      <View style={cardProductsStyles.rowContainer}>
        {renderProductControls(item)}
        {renderButtonDelete(item)}
      </View>
    </View>
  );

  const renderProducts = ({ item }) => (
    <View style={cardProductsStyles.containerCard}>
      <Image source={{ uri: item.image }} style={cardProductsStyles.imgProduct} resizeMode="contain" />
      {renderDescriptionProduct(item)}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <FlatList
        data={state.products}
        renderItem={renderProducts}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View style={cardProductsStyles.globalContainer}>
            <Text style={cardProductsStyles.labelMain}>CARRITO</Text>
          </View>
        }
        ListFooterComponent={
          <View>
            <Text style={cardProductsStyles.labelTotal}>
              Valor Total: <Text style={cardProductsStyles.labelTotalValue}>${totalValue}</Text>
            </Text>
            <Pressable style={globalStyles.mainButon} onPress={() => handlePayment()}>
              <Text style={globalStyles.mainButtonText}>Pagar</Text>
            </Pressable>
          </View>
        }
      />
    </KeyboardAvoidingView>
  );
};

export default CartShoppingScreen;
