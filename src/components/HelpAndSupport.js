import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Pressable } from 'react-native';
import helpAndSoportStyles from '../styles/helpAndSoportStyles';

const HelpAndSupport = () => {
  const [requestType, setRequestType] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleDescriptionChange = (text) => {
    if (text.length <= 300) {
      setDescription(text);
      setError('');
    } else {
      setError('La descripción no puede exceder los 300 caracteres.');
    }
  };

  const handleSubmit = () => {
    if (description.length > 300) {
      setError('La descripción no puede exceder los 300 caracteres.');
      return;
    }

    Alert.alert('Solicitud Enviada', 'Gracias por tu mensaje. Pronto daremos respuesta');

    setRequestType('');
    setDescription('');
  };

  return (
    <View style={helpAndSoportStyles.container}>
      <Text style={helpAndSoportStyles.title}>Ayuda y Soporte</Text>
      <Text>____________________________________________________</Text>

      <Text style={helpAndSoportStyles.label}>Solicitud a enviar:</Text>
      <View style={helpAndSoportStyles.requestTypeContainer}>
        <Pressable
          style={[helpAndSoportStyles.requestTypeButton, requestType === 'Queja' && helpAndSoportStyles.selectedButton]}
          onPress={() => setRequestType('Queja')}
        >
          <Text style={helpAndSoportStyles.buttonText}>Queja</Text>
        </Pressable>
        <Pressable
          style={[helpAndSoportStyles.requestTypeButton, requestType === 'Peticion' && helpAndSoportStyles.selectedButton]}
          onPress={() => setRequestType('Peticion')}
        >
          <Text style={helpAndSoportStyles.buttonText}>Peticion</Text>
        </Pressable>
        <Pressable
          style={[helpAndSoportStyles.requestTypeButton, requestType === 'Recurso' && helpAndSoportStyles.selectedButton]}
          onPress={() => setRequestType('Recurso')}
        >
          <Text style={helpAndSoportStyles.buttonText}>Recurso</Text>
        </Pressable>
      </View>

      <Text style={helpAndSoportStyles.label}>Descripción de la solicitud:</Text>
      <TextInput
        style={helpAndSoportStyles.textInput}
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={handleDescriptionChange}
        placeholder="                Escribe tu problema aquí...                "
      />
      {error ? <Text style={helpAndSoportStyles.errorText}>{error}</Text> : null}

      <Pressable style={helpAndSoportStyles.submitButton} onPress={handleSubmit}>
        <Text style={helpAndSoportStyles.submitButtonText}>Enviar</Text>
      </Pressable>
    </View>
  );
};

export default HelpAndSupport;
