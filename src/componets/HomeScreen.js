import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, FlatList, ScrollView } from "react-native";
import HomeStyles from "../styles/homeStyles";

const HomeScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([
        {
            id: '1',
            image: require('../img/tecladoMouse.jpg'),
            name: 'Combo teclado mouse ',
            description: 'Teclado y mouse de alta calidad',
            valueProduct: '1000000',
            amount: '1',
            characteristics: 'Conectividad USB, compatible con Windows y macOS',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '2',
            image: require('../img/kz.webp'),
            name: 'Audífonos para gaming',
            description: 'Audífonos con sonido envolvente',
            valueProduct: '5200000',
            amount: '1',
            characteristics: 'Sonido envolvente, micrófono retráctil',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '3',
            image: require('../img/monitor.webp'),
            name: 'Monitor LED 24"',
            description: 'Monitor Full HD de 24 pulgadas ideal para jugar',
            valueProduct: '1500000',
            amount: '1',
            characteristics: 'Resolución Full HD, conectividad HDMI y VGA',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '4',
            image: require('../img/ratonErgonomico.webp'),
            name: 'Ratón ergonómico',
            description: 'Ratón con diseño ergonómico para largas sesiones',
            valueProduct: '300000',
            amount: '1',
            characteristics: 'Diseño ergonómico, sensores de alta precisión',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '5',
            image: require('../img/tecladoRBG.jpg'),
            name: 'Teclado mecánico RGB',
            description: 'Teclado mecánico con retroiluminación RGB',
            valueProduct: '1200000',
            amount: '1',
            characteristics: 'Switches mecánicos, iluminación RGB personalizable',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '6',
            image: require('../img/sillaGamer.jpeg'),
            name: 'Silla gamer',
            description: 'Silla ergonómica para gamers',
            valueProduct: '3500000',
            amount: '1',
            characteristics: 'Material transpirable, ajustes ergonómicos múltiples',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '7',
            image: require('../img/camaraWeb.webp'),
            name: 'Webcam HD',
            description: 'Webcam HD con micrófono incorporado',
            valueProduct: '800000',
            amount: '1',
            characteristics: 'Resolución 1080p, micrófono estéreo',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '8',
            image: require('../img/hubUSB.webp'),
            name: 'Hub USB 3.0',
            description: 'Hub USB 3.0 de 4 puertos',
            valueProduct: '200000',
            amount: '1',
            characteristics: '4 puertos USB 3.0, diseño compacto',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '9',
            image: require('../img/microfono.webp'),
            name: 'Micrófono de estudio',
            description: 'Micrófono de condensador para grabación de audio',
            valueProduct: '2200000',
            amount: '1',
            characteristics: 'Patrón polar cardioide, respuesta de frecuencia plana',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '10',
            image: require('../img/alfrombrilla.jpg'),
            name: 'Alfombrilla para teclado',
            description: 'Alfombrilla grande para teclado y ratón',
            valueProduct: '150000',
            amount: '1',
            characteristics: 'Superficie antideslizante, tamaño extra grande',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
    ]);

    const [smartphones, setSmartphones] = useState([
        {
            id: '1',
            image: require('../img/GooglePixel8.jpg'),
            name: 'Google Pixel 8',
            description: 'Su cámara principal de 50 MP y imágenes avanzado.',
            valueProduct: 'N/A', 
            amount: '1', 
            characteristics: 'Cámara de 50 MP',
            paymentMethods: 'N/A' 
        },
        {
            id: '2',
            image: require('../img/iPhone.jpg'),
            name: 'Apple iPhone 15 Pro Max',
            description: 'Un sistema de cámaras avanzado con sensores.',
            valueProduct: 'N/A', 
            amount: '1',
            characteristics: 'Sistema de cámaras avanzado',
            paymentMethods: 'N/A'
        },
        {
            id: '3',
            image: require('../img/SmartphoneGalaxyS21.jpg'),
            name: 'Smartphone Galaxy S21',
            description: 'Móvil con pantalla de 6.2 pulgadas, 128 GB.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Pantalla de 6.2 pulgadas, 128 GB',
            paymentMethods: 'N/A'
        },
        {
            id: '4',
            image: require('../img/MotorolaEdge40Pro.jpg'),
            name: 'Motorola Edge 40 Pro',
            description: 'Una pantalla OLED de 6.67 pulgadas con resolución Full HD+.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Pantalla OLED de 6.67 pulgadas, resolución Full HD+',
            paymentMethods: 'N/A'
        },
        {
            id: '5',
            image: require('../img/VivoV27Pro.jpg'),
            name: 'Vivo V27 Pro',
            description: 'Una pantalla AMOLED de 6.78 pulgadas, un procesador Dimensity 8200.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Pantalla AMOLED de 6.78 pulgadas, procesador Dimensity 8200',
            paymentMethods: 'N/A'
        },
    ]);

    const [laptops, setLaptops] = useState([
        {
            id: '1',
            image: require('../img/LaptopDellXPS13.jpg'),
            name: 'Laptop Dell XPS 13',
            description: 'Portátil de 13.3 pulgadas, Intel i7 y 16 GB de RAM.',
            valueProduct: 'N/A', 
            amount: '1', 
            characteristics: 'Intel i7, 16 GB de RAM, pantalla de 13.3 pulgadas',
            paymentMethods: 'N/A' 
        },
        {
            id: '2',
            image: require('../img/DellXPS1Plus.jpg'),
            name: 'Dell XPS 13 Plus',
            description: 'Una pantalla InfinityEdge de 13.4 pulgadas, procesador Intel Core i7 de 13ª.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Pantalla InfinityEdge de 13.4 pulgadas, procesador Intel Core i7',
            paymentMethods: 'N/A'
        },
        {
            id: '3',
            image: require('../img/HPEnvyx36015.jpg'),
            name: 'HP Envy x360 15',
            description: 'Una laptop convertible 2 en 1 con pantalla táctil OLED de 15.6 pulgadas.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Pantalla táctil OLED de 15.6 pulgadas, convertible 2 en 1',
            paymentMethods: 'N/A'
        },
        {
            id: '4',
            image: require('../img/LenovoLegion5Pro.jpg'),
            name: 'Lenovo Legion 5 Pro',
            description: 'Es una laptop para juegos con una pantalla WQXGA de 16 pulgadas.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Pantalla WQXGA de 16 pulgadas, laptop para juegos',
            paymentMethods: 'N/A'
        },
        {
            id: '5',
            image: require('../img/AcerSwiftX(SFX14-41G).jpg'),
            name: 'Acer Swift X (SFX14-41G)',
            description: 'Una pantalla AMOLED de 6.78 pulgadas, un procesador Dimensity 8200.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Pantalla AMOLED de 6.78 pulgadas, procesador Dimensity 8200',
            paymentMethods: 'N/A'
        },
    ]);

    const [headphones, setHeadphones] = useState([
        {
            id: '1',
            image: require('../img/AudífonosBoseQuietComfort35.jpg'),
            name: 'Audífonos Bose QuietComfort 35',
            description: 'Auriculares inalámbricos con cancelación de ruido, hasta 20 horas de batería.',
            valueProduct: '$1,400,000 COP',
            amount: '1', 
            characteristics: 'Cancelación de ruido, hasta 20 horas de batería',
            paymentMethods: 'N/A', 
            discount: '30%',
            totalValue: '$980,000 COP'
        },
        {
            id: '2',
            image: require('../img/SonyWH-1000XM5.jpg'),
            name: 'Sony WH-1000XM5',
            description: 'Son auriculares inalámbricos de gama alta.',
            valueProduct: 'N/A', 
            amount: '1',
            characteristics: 'Gama alta, inalámbricos',
            paymentMethods: 'N/A',
            discount: 'N/A',
            totalValue: 'N/A'
        },
        {
            id: '3',
            image: require('../img/AppleAirPodsPro(2ªgeneración).jpg'),
            name: 'Apple AirPods Pro (2ª generación)',
            description: 'Ofrecen cancelación activa de ruido y modo de transparencia.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Cancelación activa de ruido, modo de transparencia',
            paymentMethods: 'N/A',
            discount: 'N/A',
            totalValue: 'N/A'
        },
        {
            id: '4',
            image: require('../img/SennheiserMomentum4Wireless.jpg'),
            name: 'Sennheiser Momentum 4 Wireless',
            description: 'Cuentan con una excelente cancelación de ruido y una calidad de sonido.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Excelente cancelación de ruido, alta calidad de sonido',
            paymentMethods: 'N/A',
            discount: 'N/A',
            totalValue: 'N/A'
        },
        {
            id: '5',
            image: require('../img/JabraElite85h.jpg'),
            name: 'Jabra Elite 85h',
            description: 'Tienen una duración de batería de hasta 36 horas y son resistentes al agua.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Duración de batería de hasta 36 horas, resistente al agua',
            paymentMethods: 'N/A',
            discount: 'N/A',
            totalValue: 'N/A'
        },
    ]);

    const [cameras, setCameras] = useState([
        {
            id: '1',
            image: require('../img/SonyAlphaA7III.jpg'),
            name: 'Sony Alpha A7 III',
            description: 'Cámara sin espejo con sensor full-frame de 24.2 MP, grabación de video 4K.',
            valueProduct: 'N/A', 
            amount: '1',
            characteristics: 'Sensor full-frame de 24.2 MP, grabación de video 4K',
            paymentMethods: 'N/A',
            discount: 'N/A',
            totalValue: 'N/A'
        },
        {
            id: '2',
            image: require('../img/NikonZ9.jpg'),
            name: 'Nikon Z9',
            description: 'Una cámara sin espejo de formato completo.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Formato completo',
            paymentMethods: 'N/A',
            discount: 'N/A',
            totalValue: 'N/A'
        },
        {
            id: '3',
            image: require('../img/Camara.jpg'),
            name: 'Canon EOS R5',
            description: 'Es una cámara sin espejo de alto rendimiento.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Alto rendimiento',
            paymentMethods: 'N/A',
            discount: 'N/A',
            totalValue: 'N/A'
        },
        {
            id: '4',
            image: require('../img/FujifilmX-H2S.jpg'),
            name: 'Fujifilm X-H2S',
            description: 'Una cámara sin espejo con un sensor APS-C de 26.1 MP.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Sensor APS-C de 26.1 MP',
            paymentMethods: 'N/A',
            discount: 'N/A',
            totalValue: 'N/A'
        },
        {
            id: '5',
            image: require('../img/LeicaSL2.jpg'),
            name: 'Leica SL2',
            description: 'Una cámara sin espejo de formato completo con un sensor de 47.3 MP.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'Sensor de 47.3 MP, formato completo',
            paymentMethods: 'N/A',
            discount: 'N/A',
            totalValue: 'N/A'
        },
    ]);

    const [tv, setTv] = useState([
        {
            id: '1',
            image: require('../img/SmartTVLGOLED55CXPUA1.jpg'),
            name: 'Smart TV LG OLED55CXPUA1',
            description: 'Televisor OLED de 55 pulgadas con 4K y HDR.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'OLED, 4K, HDR',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '3',
            image: require('../img/SonyA90JOLED.jpg'),
            name: 'Sony A90J OLED',
            description: 'Es un televisor de 65 pulgadas con panel OLED.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'OLED, 65 pulgadas',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '2',
            image: require('../img/SamsungQN90BNeoQLED.jpg'),
            name: 'Samsung QN90B Neo QLED',
            description: 'De 55 pulgadas utiliza retroiluminación Mini LED.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: '55 pulgadas, Mini LED',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '4',
            image: require('../img/TCL6-SeriesR655.jpg'),
            name: 'TCL 6-Series R655',
            description: 'Un televisor QLED de 55 pulgadas con retroiluminación Mini LED.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'QLED, 55 pulgadas, Mini LED',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        },
        {
            id: '5',
            image: require('../img/Philips65OLED803.jpg'),
            name: 'Philips 65OLED803',
            description: 'Un televisor OLED de 65 pulgadas con tecnología Ambilight.',
            valueProduct: 'N/A',
            amount: '1',
            characteristics: 'OLED, 65 pulgadas, Ambilight',
            paymentMethods: 'PSE; Tarjeta de credito, Efecty'
        }
    ]);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleProductPress = (product) => {
        navigation.navigate('ProductDetail', { product });
    };

    const renderProduct = ({ item }) => (
        <Pressable style={HomeStyles.productContainer} onPress={() => handleProductPress(item)}>
            <Image source={item.image} style={HomeStyles.productImage} resizeMode="contain" />
            <View style={HomeStyles.productDetails}>
                <Text style={HomeStyles.productName}>{item.name}</Text>
                <Text style={HomeStyles.productDescription}>{item.description}</Text>
                <Text style={HomeStyles.productValue}>${item.valueProduct}</Text>
            </View>
        </Pressable>
    );
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
                    ListFooterComponent={<View style={HomeStyles.footerSpacing} />}
                />
            </View>
        </View>
    );
};

export default HomeScreen;