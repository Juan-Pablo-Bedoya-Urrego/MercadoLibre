import React, { useState, useEffect, useReducer } from 'react';
import { View, Text, Image, TextInput, Alert, Pressable, KeyboardAvoidingView, ScrollView, ToastAndroid } from 'react-native';
import productDetailStyles from '../styles/productDetailStyles';
import globalStyles from '../styles/globlaStyles';
import { useAppContext } from '../Context/context';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';


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
            if (Platform.OS === 'android') {
                ToastAndroid.show(`Haz evaluado el producto con: ${star} estrellas`, ToastAndroid.SHORT);
            }
        } else {
            if (Platform.OS === 'android') {
                ToastAndroid.show(`Primero se debe comentar para poder evaluar el producto`, ToastAndroid.SHORT);
            }
        }
    };

    const handleCommentSubmit = async () => {
        if (state.comment.trim() !== '') {
            ToastAndroid.show(`Comentario agregado con éxito`, ToastAndroid.SHORT);

            try {
                await addDoc(collection(db, 'comentarios'), {
                    user: state.user,
                    productId: product.id,
                    comment: state.comment,
                    timestamp: new Date()
                });
                dispatch({ type: 'SUBMIT_RATING' });
            } catch (error) {
                ToastAndroid.show(`No se pudo agregar el comentario, intenta de nuevo.`, ToastAndroid.SHORT);
                console.log(error)
            }
        } else {
            ToastAndroid.show(`Debes comentar antes de enviar el comentario`, ToastAndroid.SHORT);
        }
    };

    const handleQuestionSubmit = async () => {
        if (question.trim() !== '') {
            ToastAndroid.show(`Pregunta agregada con éxito`, ToastAndroid.SHORT);

            try {
                await addDoc(collection(db, 'preguntas'), {
                    user: state.user,
                    productId: product.id,
                    question: question,
                    timestamp: new Date()
                });
                setQuestion('');
            } catch (error) {
                ToastAndroid.show(`No se pudo enviar la pregunta, intenta de nuevo.`, ToastAndroid.SHORT);
            }
        } else {
            ToastAndroid.show(`Por favor, ingresa una pregunta antes de enviar.`, ToastAndroid.SHORT);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={productDetailStyles.container}>
                    <Image
                        style={productDetailStyles.imagen}
                        source={{ uri: product.image }}
                    />
                    <Text style={productDetailStyles.item}>{product.name}</Text>
                    <Text style={productDetailStyles.descripcion}>{product.description}.</Text>
                    <Text style={productDetailStyles.valor}>Valor: ${product.valueProduct}</Text>

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
                                style={productDetailStyles.starPressable}
                            >
                                <Text style={[
                                    productDetailStyles.star,
                                    { color: star <= state.rating ? '#FFD700' : '#E0E0E0' }
                                ]}>★</Text>
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
                        <Pressable style={productDetailStyles.mainButon} onPress={handleCommentSubmit}>
                            <Text style={productDetailStyles.mainButtonText}>Enviar comentario</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ProductDetail;
