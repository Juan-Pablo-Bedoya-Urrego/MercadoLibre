import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Pressable, ActivityIndicator } from 'react-native';
import myPurchasesStyles from '../styles/myPurchasesStyles';
import { useAppContext } from '../Context/context';
import { db } from '../firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { LogBox } from 'react-native';




const MyPurchasesScreen = ({ navigation }) => {
    const { state, dispatch } = useAppContext();
    const [loading, setLoading] = useState(true);

    const loadPurchases = async () => {
        try {
            const purchasesQuery = query(collection(db, 'orders'), where("userId", "==", state.user));
            const purchasesSnapshot = await getDocs(purchasesQuery);

            const purchasesData = purchasesSnapshot.docs.map(doc => {
                const data = doc.data();
                return data.products.map(product => ({
                    ...product,
                    id: doc.id,   
                    status: data.status || 'Desconocido', 
                }));
            }).flat(); 
            LogBox.ignoreAllLogs();
            dispatch({ type: 'SET_PRODUCTS', payload: purchasesData });
            setLoading(false);
        } catch (error) {
            Alert.alert('Error', 'Error al cargar las compras: ' + error.message);
        }
    };

    useEffect(() => {
        loadPurchases();
    }, []);

    const handleProductPress = (product) => {
        navigation.navigate('ProductDetail', { product });
    };

    const renderProduct = ({ item }) => (
        <Pressable style={myPurchasesStyles.productContainer} onPress={() => handleProductPress(item)}>
            <Image source={{ uri: item.image }} style={myPurchasesStyles.productImage} resizeMode="contain" />
            <View style={myPurchasesStyles.productDetails}>
                <Text style={myPurchasesStyles.productName}>{item.name}</Text>
                <Text style={myPurchasesStyles.productDescription}>{item.description}</Text>
                <Text style={myPurchasesStyles.productValue}>{item.valueProduct}</Text>
            </View>
        </Pressable>
    );

    if (loading) {
        return (
            <View style={myPurchasesStyles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Cargando compras...</Text>
            </View>
        );
    }

    return (
        <View style={myPurchasesStyles.container}>
            <Text style={myPurchasesStyles.firstTitle}>Mis Compras</Text>
            <FlatList
                data={state.productList}
                keyExtractor={(item) => item.id}
                renderItem={renderProduct}
            />
        </View>
    );
};

export default MyPurchasesScreen;
