import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, Alert, Pressable } from 'react-native';
import productDetailStyles from '../styles/productDetailStyles';
import globalStyles from '../styles/globlaStyles';

const ProductDetail = ({ route }) => {
    const { product } = route.params;
    const [rating, setRating] = useState(0);
    const [ratingSubmitted, setRatingSubmitted] = useState(false);
    const [comment, setComment] = useState('');

    const handleStarPress = (star) => {
        setRating(star);
        if (star > 0 && comment.trim() !== '') {
            setRatingSubmitted(true);
            Alert.alert('Haz evaluado', 'Haz evaluado el producto con: ' + String(star) + ' estrellas');
            setComment('');
        } else {
            Alert.alert('Advertencia', 'Primero se debe comentar para poder evaluar el producto');
        }
    };

    const handleCommentSubmit = () => {
        if (setRatingSubmitted && comment.trim() !== '') {
            Alert.alert('Exito', 'Comentario agregado con exito');
        } else {
            Alert.alert('Error', 'Debes comentar antes de enviar el comentario');
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
                maxLength={100}
            />
            <Pressable style={productDetailStyles.mainButon} onPress={() => Alert.alert('Exito','Pregunta enviada')}>
                <Text style={productDetailStyles.mainButtonText}>Enviar comentario</Text>
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
                    value={comment}
                    onChangeText={setComment}
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