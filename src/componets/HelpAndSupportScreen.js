import React, { useState, useReducer, useEffect } from 'react';
import { View, Text, TextInput, Alert, Pressable } from 'react-native';
import helpAndSoportStyles from '../styles/helpAndSoportStyles';
import { useAppContext } from '../Context/context';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const HelpAndSupportScreen = () => {
  const { state, dispatch } = useAppContext();
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      Alert.alert('Solicitud Enviada', 'Gracias por tu mensaje. Pronto daremos respuesta');
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  const handleDescriptionChange = (text) => {
    if (text.length <= 300) {
      dispatch({ type: 'SET_DESCRIPTION', payload: text });
    } else {
      dispatch({ type: 'SET_ERROR', payload: 'La descripción no puede exceder los 300 caracteres.' });
    }
  };

  const handleSubmit = async () => {
    if (state.description.length > 300) {
      dispatch({ type: 'SET_ERROR', payload: 'La descripción no puede exceder los 300 caracteres.' });
      return;
    }

    try {
      const supportRequest = {
        userId: state.user, 
        requestType: state.requestType,
        description: state.description,
        createdAt: new Date().toISOString(), 
      };

      await addDoc(collection(db, 'supportRequests'), supportRequest);

      
      Alert.alert('PQR', 'Solicitud de PQR enviada exitosamente');
      setIsSubmitted(true);
      dispatch({ type: 'RESET_FORM' });
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al enviar la solicitud: ' + error.message);
    }
  };

  return (
    <View style={helpAndSoportStyles.container}>
      <View style={helpAndSoportStyles.content}>
        <Text style={helpAndSoportStyles.title}>Ayuda y Soporte</Text>
        <View style={helpAndSoportStyles.separator} />

        <Text style={helpAndSoportStyles.label}>Solicitud a enviar:</Text>
        <View style={helpAndSoportStyles.requestTypeContainer}>
          <Pressable
            style={[helpAndSoportStyles.requestTypeButton, state.requestType === 'Queja' && helpAndSoportStyles.selectedButton]}
            onPress={() => dispatch({ type: 'SET_REQUEST_TYPE', payload: 'Queja' })}
          >
            <Text style={helpAndSoportStyles.buttonText}>Queja</Text>
          </Pressable>
          <Pressable
            style={[helpAndSoportStyles.requestTypeButton, state.requestType === 'Peticion' && helpAndSoportStyles.selectedButton]}
            onPress={() => dispatch({ type: 'SET_REQUEST_TYPE', payload: 'Peticion' })}
          >
            <Text style={helpAndSoportStyles.buttonText}>Petición</Text>
          </Pressable>
          <Pressable
            style={[helpAndSoportStyles.requestTypeButton, state.requestType === 'Recurso' && helpAndSoportStyles.selectedButton]}
            onPress={() => dispatch({ type: 'SET_REQUEST_TYPE', payload: 'Recurso' })}
          >
            <Text style={helpAndSoportStyles.buttonText}>Recurso</Text>
          </Pressable>
        </View>

        <Text style={helpAndSoportStyles.label}>Descripción de la solicitud:</Text>
        <TextInput
          style={helpAndSoportStyles.textInput}
          multiline
          numberOfLines={4}
          value={state.description}
          onChangeText={handleDescriptionChange}
          placeholder="Escribe tu problema aquí..."
        />
        {state.error ? <Text style={helpAndSoportStyles.errorText}>{state.error}</Text> : null}

        <Pressable style={helpAndSoportStyles.submitButton} onPress={handleSubmit}>
          <Text style={helpAndSoportStyles.submitButtonText}>Enviar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HelpAndSupportScreen;
