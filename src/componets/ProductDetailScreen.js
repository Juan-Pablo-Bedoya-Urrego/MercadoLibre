import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, Image, TextInput, Alert, Pressable } from 'react-native';
import productDetailStyles from '../styles/productDetailStyles';
import globalStyles from '../styles/globlaStyles';
import { useAppContext } from '../Context/context';


const ProductDetail = ({ route }) => {
    const { product } = route.params;
    const { state, dispatch } = useAppContext();
    const [question, setQuestion] = useState('');

    useEffect(() => {
        dispatch({ type: 'SET_RATING', payload: 0 });
        dispatch({ type: 'SET_COMMENT', payload: '' });
    }, []);

    const handleStarPress = (star) => {
        if (star > 0 && state.comment.trim() !== '') {
            dispatch({ type: 'SET_RATING', payload: star });
            dispatch({ type: 'SUBMIT_RATING' });
            Alert.alert('Haz evaluado', `Haz evaluado el producto con: ${star} estrellas`);
        } else {
            Alert.alert('Advertencia', 'Primero se debe comentar para poder evaluar el producto');
        }
    };

    const handleCommentSubmit = () => {
        if (state.comment.trim() !== '') {
            Alert.alert('Éxito', 'Comentario agregado con éxito');
            dispatch({ type: 'SUBMIT_RATING' });
        } else {
            Alert.alert('Error', 'Debes comentar antes de enviar el comentario');
        }
    };

    const handleQuestionSubmit = () => {
        if (question.trim() !== '') {
            Alert.alert('Éxito', 'Pregunta enviada: ' + question);
            setQuestion('');
        } else {
            Alert.alert('Error', 'Por favor, ingresa una pregunta antes de enviar.');
        }
    };

    return (
        <View style={productDetailStyles.container}>
            <Image
                style={productDetailStyles.imagen}
                source={product.image}
            />
            <Text style={productDetailStyles.item}>{product.name}</Text>
            <Text style={productDetailStyles.descripcion}>{product.description}.</Text>
            <Text style={productDetailStyles.valor}>Valor: ${product.valueProduct}</Text>
            <Text style={productDetailStyles.caracteristicas}>Características: {product.characteristics}.</Text>
            <Text style={productDetailStyles.medioPago}>Medio de Pago: {product.paymentMethods}.</Text>

            <TextInput
                style={productDetailStyles.input}
                placeholder="Haz una pregunta..."
                value={question}
                onChangeText={setQuestion}
                maxLength={100}
            />
            <Pressable style={productDetailStyles.mainButon} onPress={handleQuestionSubmit}>
                <Text style={productDetailStyles.mainButtonText}>Enviar pregunta</Text>
            </Pressable>

            <Text style={productDetailStyles.calificacion}>Calificación:</Text>
            <View style={productDetailStyles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                    <Pressable
                        key={star}
                        onPress={() => handleStarPress(star)}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#ddd' : 'transparent',
                            },
                            productDetailStyles.starPressable,
                        ]}
                    >
                        <Text style={productDetailStyles.star}>★</Text>
                    </Pressable>
                ))}
            </View>

            <View style={productDetailStyles.commentSection}>
                <TextInput
                    style={productDetailStyles.input}
                    placeholder="Escribe tu comentario..."
                    value={state.comment}
                    onChangeText={(text) => dispatch({ type: 'SET_COMMENT', payload: text })}
                    maxLength={200}
                />
                <Pressable style={globalStyles.mainButon} onPress={handleCommentSubmit}>
                    <Text style={globalStyles.mainButtonText}>Enviar comentario</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default ProductDetail;