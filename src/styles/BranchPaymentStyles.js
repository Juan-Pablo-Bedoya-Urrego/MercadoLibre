
import { StyleSheet } from 'react-native'

const BranchPaymentStyles = StyleSheet.create({
    globalContainer:{
        padding: 15,
        justifyContent: 'center',
        paddingTop: 25
    },
    containerCard:{
        flexDirection: 'row',
        marginBottom: 15,
        padding: 5,
        backgroundColor: "#91BDF0",
        borderRadius: 7
    },
    imgProduct:{
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
    labelMain:{
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 20,
        color: '#000',
        paddingBottom: 50
    },
    labelMainData:{
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 20,
        color: '#000',
    },
    labelTotal: {
        alignSelf: 'flex-end',
        fontSize: 15,
        marginBottom: 8,
        color: 'black',
        marginRight: 50
    },
    labelTotalValue: {
        color: '#2B4BFC'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputAmount: {
        borderWidth: 1,
        padding: 5,
        marginLeft: 10,
        width: 35,
        height: 25 ,
        color :'#000'
    },
    input: {
        borderWidth: 1,
        padding: 5,
        color: '#000'
    },
    picker: {
        color: '#000', 
        backgroundColor: '#dde3e8', 
    },
});

export default BranchPaymentStyles;