import React from 'react';
import { View, Text } from 'react-native';
import Profile from './src/components/Profile';
import HelpAndSupport from './src/components/HelpAndSupport';
import helpAndSoportStyles from './src/styles/helpAndSoportStyles';

const App = () => {
  return (
    <View style={helpAndSoportStyles.container}>
      <Text>
      <HelpAndSupport/>
      </Text>
    </View>
  );
};

export default App;
