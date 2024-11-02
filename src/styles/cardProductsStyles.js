import { StyleSheet } from 'react-native'

const cardProductsStyles = StyleSheet.create({
    globalContainer: {
        padding: 15,
        justifyContent: 'center',
        paddingTop: 25
    },
    containerCard: {
        flexDirection: 'row',
        marginBottom: 15,
        padding: 5,
        backgroundColor: "#91BDF0",
        borderRadius: 7
    },
    imgProduct: {
        width: 100,
        height: 100,
    },
    containerText: {
        flex: 1,
        marginLeft: 10,
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 15,
        marginBottom: 8,
        color: 'black',
    },
    labelMain: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 20,
        color: '#000',
        paddingBottom: 50
    },
    labelTotal: {
        textAlign: 'center',
        fontSize: 17,
        marginBottom: 8,
        color: 'black',
        paddingTop: 100,
    },
    labelTotalValue:{
        color: '#2B4BFC'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputAmount: {
        padding: 5,
        width: 50,
        height: 30,
        color: '#000',
        textAlign: 'center',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc', 
        borderRadius: 5, 
    },
    clearButton: {
        backgroundColor: '#ff4d4d', 
        padding: 8,                 
        borderRadius: 5,            
        alignItems: 'center',       
        justifyContent: 'center',   
        marginLeft: 95,             
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: '#FFF',          
    },
});

export default cardProductsStyles;