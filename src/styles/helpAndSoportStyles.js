import { StyleSheet } from 'react-native';

const helpAndSoportStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        maxWidth: 600, 
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },
    separator: {
        height: 1,
        backgroundColor: '#E1E8EB',
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#555',
        marginBottom: 8,
    },
    requestTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    requestTypeButton: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#00B8EB',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#007BFF',
    },
    selectedButton: {
        backgroundColor: '#0056b3',
        borderColor: '#0056b3',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
    },
    textInput: {
        backgroundColor: '#FFF',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        textAlignVertical: 'top',
    },
    errorText: {
        color: '#D9534F',
        fontSize: 14,
        marginBottom: 15,
    },
    submitButton: {
        backgroundColor: '#28A745',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
});

export default helpAndSoportStyles;