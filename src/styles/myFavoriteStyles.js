import { StyleSheet } from 'react-native';

const myFavoriteStyles = StyleSheet.create({
    container: {
        flex: 1,
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
    itemStatus: {
        fontSize: 18,
        color: '#black',
        flexShrink: 1,
        marginBottom: 16,
    },
    itemDescription: {
        fontSize: 18,
        color: '#black',
        flexShrink: 1,
    },
});
export default myFavoriteStyles;