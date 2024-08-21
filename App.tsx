import React from 'react';
import {View,Text} from 'react-native';
import Profile from './src/components/Profile';
import HelpAndSupport from './src/components/HelpAndSupport';



const App = ()=>{
    return(
        <View >
            <Profile />
            <HelpAndSupport />
        </View>

    );
};

export default App;