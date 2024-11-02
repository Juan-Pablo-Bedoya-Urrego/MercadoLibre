import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Image, FlatList, ScrollView, ActivityIndicator, ToastAndroid, Platform } from "react-native";
import HomeStyles from "../styles/homeStyles";
import { useAppContext } from "../Context/context";
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const HomeScreen = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [smartphones, setSmartphones] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [headphones, setHeadphones] = useState([]);
    const [cameras, setCameras] = useState([]);
    const [tv, setTv] = useState([]);
    const [loading, setLoading] = useState(true);
    const { state, dispatch } = useAppContext();

    const fetchProducts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Phome'));
            const querySnapshotHead = await getDocs(collection(db, 'headphones'));
            const querySnapshotCamara = await getDocs(collection(db, 'cameras'));
            const querySnapshotTv = await getDocs(collection(db, 'tv'));
            const querySnapshotPhone = await getDocs(collection(db, 'smartphones'));
            const querySnapshotLaptops = await getDocs(collection(db, 'laptops'));
            const productList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const headList = querySnapshotHead.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const camaraList = querySnapshotCamara.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const tvList = querySnapshotTv.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const smartphonesList = querySnapshotPhone.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            const laptopsList = querySnapshotLaptops.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productList);
            setHeadphones(headList);
            setCameras(camaraList);
            setTv(tvList);
            setSmartphones(smartphonesList);
            setLaptops(laptopsList);
        } catch (error) {
            console.error('Error al traer productos: ', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);


    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleProductPress = (product) => {
        navigation.navigate('ProductDetail', { product });
    };

    const handleAddToCart = (item) => {
        dispatch({ type: 'ADD_PRODUCT', payload: item });
        if (Platform.OS === 'android') {
            ToastAndroid.show(`${item.name} ha sido agregado al carrito`, ToastAndroid.SHORT);
        } else {
            Alert.alert("Producto agregado", `${item.name} ha sido agregado al carrito.`);
        }
    };

    const handleAddToFavorites = async (item) => {
        if (state.user) { 
            ToastAndroid.show(`${item.name} ha sido agregado a tus favoritos.`, ToastAndroid.SHORT);
            try {
                const favoriteData = {
                    userId: state.user, 
                    productId: item.id, 
                    name: item.name,
                    image: item.image,
                    description: item.description,
                    valueProduct: item.valueProduct,
                };

                await addDoc(collection(db, 'favorites'), favoriteData); 

            } catch (error) {
                console.log('Error al agregar a favoritos: ', error);
            }
        } else {
            ToastAndroid.show(`Debes iniciar sesión para agregar a favoritos.`, ToastAndroid.SHORT);
        }
    };

    const renderProduct = ({ item }) => (
        <Pressable style={HomeStyles.productContainer} onPress={() => handleProductPress(item)}>
            <Image source={{ uri: item.image }} style={HomeStyles.productImage} resizeMode="contain" />
            <View style={HomeStyles.productDetails}>
                <Text style={HomeStyles.productName}>{item.name}</Text>
                <Text style={HomeStyles.productDescription}>{item.description}</Text>
                <Text style={HomeStyles.productValue}>${item.valueProduct}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Pressable style={HomeStyles.cartButton} onPress={() => handleAddToCart(item)}>
                    <Text style={HomeStyles.cartButtonText}>🛒</Text>
                </Pressable>
                <Pressable style={HomeStyles.favoriteButton} onPress={() => handleAddToFavorites(item)}>
                    <Text style={HomeStyles.favoriteButtonText}>❤️</Text>
                </Pressable>
            </View>
        </Pressable>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;  
    }

    const renderHeader = () => (
        <View style={HomeStyles.header}>
            <View style={HomeStyles.searchBarContainer}>
                <TextInput
                    style={HomeStyles.searchInput}
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />
                <Pressable style={HomeStyles.iconButton} onPress={() => navigation.navigate('CartShopping')}>
                    <Image
                        source={require('../img/carritocompras.png')}
                        style={HomeStyles.icon}
                    />
                </Pressable>
            </View>
            <Pressable style={HomeStyles.iconButton} onPress={() => navigation.navigate('Login')}>
                <Image
                    source={require('../img/entrar.png')}
                    style={HomeStyles.icon}
                />
            </Pressable>
            <Pressable style={HomeStyles.iconButton} onPress={() => navigation.navigate('Profile')}>
                <Image
                    source={require('../img/acceso.png')}
                    style={HomeStyles.icon}
                />
            </Pressable>
        </View>
    );
    const renderSroll = () => (
        <ScrollView
            style={HomeStyles.scrollContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <View style={HomeStyles.buttonRowContainer}>
                <Pressable
                    style={HomeStyles.pressable}
                    onPress={() => navigation.navigate('Category', { products: tv })}
                >
                    <Text style={HomeStyles.pressableText}>Television</Text>
                </Pressable>
                <Pressable
                    style={HomeStyles.pressable}
                    onPress={() => navigation.navigate('Category', { products: smartphones })}
                >
                    <Text style={HomeStyles.pressableText}>Telefonos</Text>
                </Pressable>
                <Pressable
                    style={HomeStyles.pressable}
                    onPress={() => navigation.navigate('Category', { products: laptops })}
                >
                    <Text style={HomeStyles.pressableText}>Computadores</Text>
                </Pressable>
                <Pressable
                    style={HomeStyles.pressable}
                    onPress={() => navigation.navigate('Category', { products: headphones })}
                >
                    <Text style={HomeStyles.pressableText}>Auriculares</Text>
                </Pressable>
                <Pressable
                    style={HomeStyles.pressable}
                    onPress={() => navigation.navigate('Category', { products: cameras })}
                >
                    <Text style={HomeStyles.pressableText}>Camaras</Text>
                </Pressable>
            </View>
        </ScrollView>
    );

    return (
        <View style={HomeStyles.containerMain}>
            {renderHeader()}
            {renderSroll()}
            <View style={HomeStyles.container}>
                <FlatList
                    data={filteredProducts}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                    style={HomeStyles.flatListContent}
                    ListFooterComponent={<View style={{ ...HomeStyles.footerSpacing, ...HomeStyles.contentContainerStyle }} />}
                />
            </View>
        </View>
    );
};

export default HomeScreen;