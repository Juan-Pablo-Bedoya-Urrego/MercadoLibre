import { StyleSheet } from 'react-native';

const offersStyles = StyleSheet.create({
    container: {
        flex: 1,
        display:'flex',
        position:'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    firstTitle: {
        paddingHorizontal: 'auto',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#00b8eb',
    },
    itemImage: {
        paddingHorizontal:'auto',
        fontWeight:'bold',
        width: 100,
        height: 100,
        marginRight: 16,
    },
    itemContainer: {
        flex: 1,
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00b8eb',
    },
    itemLetters: {
        fontSize: 18,
        color: '#black',
        marginBottom: 16,
    },
    itemDescription: {
        fontSize: 18,
        color: '#black',
        flexShrink: 1,
    },
});
export default offersStyles;