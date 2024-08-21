import React, { useState } from 'react';
import { View, Text, TextInput, SectionList } from "react-native";
import globalStyles from "../styles/globalStyles";
import helpAndSoportStyles from '../styles/helpAndSoportStyles'


const renderOptions = (selectedOption, setSelectedOption) => {
    return (
        <View style={globalStyles.container}>
            {['Queja', 'Petición', 'Reclamo'].map((option, index) => (
                <CheckBox style={helpAndSoportStyles.checkBoxContainer}
                    key={index}
                    value={selectedOption === option}
                    onValueChange={() => setSelectedOption(option)}
                />
            ))}
        </View>
    );
};

const renderTextInput = (selectedOption) => {
    if (selectedOption) {
        return (
            <TextInput
                style={helpAndSoportStyles.textInput}
                placeholder={`Escriba su ${selectedOption.toLowerCase()}`}
            />
        );
    }
    return null;
};

const HelpAndSupport = () => {
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <View style={helpAndSoportStyles.container}>
            <SectionList
                sections={[
                    { title: 'Ayuda y Soporte', data: ['Queja', 'Petición', 'Reclamo'] },
                ]}
            />
            {renderOptions(selectedOption, setSelectedOption)}
            {renderTextInput(selectedOption)}
        </View>
    );
};

export default HelpAndSupport; 