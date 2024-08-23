import React, { useState } from 'react';
import { View, Text, TextInput, Alert,Pressable} from 'react-native';
import helpAndSoportStyles from '../styles/helpAndSoportStyles';

const HelpAndSupport = () => {
  const [requestType, setRequestType] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    Alert.alert('Solicitud Enviada', 'Gracias por tu mensaje. Te responderemos pronto');

    setRequestType('');
    setDescription('');
  };

  return (
    <View style={helpAndSoportStyles.container}>
      <Text style={helpAndSoportStyles.title}>Ayuda y Soporte</Text>
      <Text>-------------------------------------------------------------</Text>

      <Text style={helpAndSoportStyles.label}> Solicitud a enviar:</Text>
      <View style={helpAndSoportStyles.requestTypeContainer}>
        <Pressable
          style={[helpAndSoportStyles.requestTypeButton, requestType === 'Queja' && styles.selectedButton]}
          onPress={() => setRequestType('Queja')}
        >
          <Text style={helpAndSoportStyles.buttonText}>Queja</Text>
        </Pressable>
        <Pressable
          style={[helpAndSoportStyles.requestTypeButton, requestType === 'Peticion' && styles.selectedButton]}
          onPress={() => setRequestType('Peticion')}
        >
          <Text style={helpAndSoportStyles.buttonText}>Peticion</Text>
        </Pressable>
        <Pressable
          style={[helpAndSoportStyles.requestTypeButton, requestType === 'Recurso' && styles.selectedButton]}
          onPress={() => setRequestType('Recurso')}
        >
          <Text style={helpAndSoportStyles.buttonText}>Recurso</Text>
        </Pressable>
      </View>

      <Text style={helpAndSoportStyles.label}>Descripcion de la solicitud:</Text>
      <TextInput
        style={helpAndSoportStyles.textInput}
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
        placeholder="        Escribe tu problema aquí...         "
      />

      <Pressable style={helpAndSoportStyles.submitButton} onPress={handleSubmit}>
        <Text style={helpAndSoportStyles.submitButtonText}>Enviar</Text>
      </Pressable>
    </View>
  );
};

export default HelpAndSupport;
