import { StyleSheet } from 'react-native';

const categoriesHeadphonesStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    firstTitle: {
        alignItems:'center',
        paddingHorizontal: 'auto',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#00b8eb',
    },
    itemImage: {
        paddingHorizontal:'auto',
        fontWeight:'bold',
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
    itemDescription: {
        fontSize: 18,
        height:60,
        color: '#black',
        flexShrink: 1,
        paddingBottom:'20'
    },
});
export default categoriesHeadphonesStyles;