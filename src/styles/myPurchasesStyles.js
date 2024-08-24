import { StyleSheet } from 'react-native';

const myPurchasesStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    firstTitle: {
        alignItems: 'center',
        paddingHorizontal: 'auto',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#00b8eb',
    },
    itemImage: {
        paddingHorizontal: 'auto',
        fontWeight: 'bold',
        width: 200,
        height: 150,
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
        marginBottom: 16,
    },
    itemDescription: {
        fontSize: 18,
        color: '#black',
        flexShrink: 1,
    },
});
export default myPurchasesStyles;