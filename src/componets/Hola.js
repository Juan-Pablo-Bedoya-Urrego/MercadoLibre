// En tu componente
import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, ActivityIndicator, Alert, Button } from 'react-native';
import { db } from '../firebase/firebaseConfig'; // Asegúrate de que la ruta sea correcta
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { initMercadoPago } from '@mercadopago/sdk-react';
initMercadoPago('APP_USR-ef449687-ef72-47ba-b6bb-8bbf3d663e89');
import { Payment } from '@mercadopago/sdk-react';

const Hola = () => {
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
    const addData = async () => {
        try {
            const collectionRef = collection(db, 'laptops');

            for (const product of laptops) {
                await addDoc(collectionRef, product);
            }

            console.log('Productos guardados en Firestore con éxito');
        } catch (error) {
            console.error('Error al guardar los productos en Firestore:', error);
        }
    };
    return (
        <View>
            <Button title="Agregar Datos" onPress={addData} />
        </View>
    );
    /*useEffect(() => {
        const renderPaymentBrick = async (bricksBuilder) => {
            const settings = {
                initialization: {
                    amount: 10000, // Monto total
                    preferenceId: preferenceId, // Reemplaza con tu preferenceId
                },
                customization: {
                    paymentMethods: {
                        ticket: "all",
                        bankTransfer: "all",
                        creditCard: "all",
                        debitCard: "all",
                        mercadoPago: "all",
                    },
                },
                callbacks: {
                    onReady: () => {
                        // Callback cuando el Brick está listo
                    },
                    onSubmit: ({ selectedPaymentMethod, formData }) => {
                        return new Promise((resolve, reject) => {
                            fetch("/process_payment", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(formData),
                            })
                                .then((response) => response.json())
                                .then((response) => {
                                    // Manejar resultado del pago
                                    resolve();
                                })
                                .catch((error) => {
                                    // Manejar error
                                    reject();
                                });
                        });
                    },
                    onError: (error) => {
                        console.error(error);
                    },
                },
            };

            window.paymentBrickController = await bricksBuilder.create(
                "payment",
                "paymentBrick_container",
                settings
            );
        };

        // Asegúrate de tener bricksBuilder inicializado aquí
        renderPaymentBrick(bricksBuilder);

        // Limpieza al salir de la pantalla
        return () => {
            if (window.paymentBrickController) {
                window.paymentBrickController.unmount();
            }
        };
    }, [preferenceId]);

    return (
        <Payment
            initialization={initialization}
            customization={customization}
            onSubmit={onSubmit}
            onReady={onReady}
            onError={onError}
        />
    );*/
    /*const [products, setProducts] = useState([
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
    const addData = async () => {
        try {
            const collectionRef = collection(db, 'Phome');

            for (const product of products) {
                await addDoc(collectionRef, product);
            }

            console.log('Productos guardados en Firestore con éxito');
        } catch (error) {
            console.error('Error al guardar los productos en Firestore:', error);
        }
    };
    return (
        <View>
            <Button title="Agregar Datos" onPress={addData} />
        </View>
    );
    /*const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const imageList = [];
                const querySnapshot = await getDocs(collection(db, 'Productos'));

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.image) {
                        imageList.push(data.image); // Agrega cada URL de imagen a la lista
                    }
                });

                setImages(imageList);
            } catch (error) {
                Alert.alert('Error', 'Error al obtener las imágenes: ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <FlatList
            data={images}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <Image
                    source={{ uri: item }}
                    style={{ width: 200, height: 200, margin: 10 }}
                />
            )}
        />
    );*/
    /*const [data, setData] = useState([]);

    // Función para agregar un documento
    const addData = async () => {
        try {
            await addDoc(collection(db, 'Nombre'), {
                nombre: 'Mamita',
            });
            console.log('Documento agregado');
        } catch (e) {
            console.error("Error al agregar documento: ", e);
        }
    };

    // Función para obtener documentos
    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Nombre'));
            const items = querySnapshot.docs.map(doc => doc.data());
            setData(items);
        } catch (e) {
            console.error("Error al obtener documentos: ", e);
        }
    };

    useEffect(() => {
        getData(); // Llama a la función al cargar el componente
    }, []);

    return (
        <View>
            <Button title="Agregar Datos" onPress={addData} />
            {data.map((item, index) => (
                <Text style = {{color: 'red'}}
                 key={index}>{item.nombre} - {item.edad}</Text>
            ))}
        </View>
    );*/
};

export default Hola;