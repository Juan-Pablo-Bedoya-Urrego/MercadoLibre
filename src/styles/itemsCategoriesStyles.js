import { StyleSheet } from 'react-native';

const itemsCategoriesStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f2f2f2',
    },
    buttonContainer: {
        marginVertical: 10,
        width: '80%',
        borderRadius: 25,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: '#00b8eb',
        color: '#fff',
        paddingVertical: 12,
        borderRadius: 25,
    },
});

export default itemsCategoriesStyles;