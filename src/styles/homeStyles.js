import { StyleSheet } from 'react-native'

const HomeStyles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: '#00B8EB',
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 10,
        marginRight: 10,
    },
    cartButton: {
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 4,
    },
    iconButton: {
        padding: 10,
        borderRadius: 4,
    },
    icon: {
        width: 24,
        height: 24,
    },
    container: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        paddingVertical: 25
    },
    buttonRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    productContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#91BDF0',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    productDetails: {
        flex: 1,
        marginLeft: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    },
    productDescription: {
        fontSize: 14,
        color: '#555',
    },
    productValue: {
        fontSize: 14,
        color: '#fff',
        marginTop: 5,
    },
    productAmount: {
        fontSize: 14,
        color: '#000',
        marginTop: 5,
    },
    flatListContent: {
        paddingBottom: 20,
    },
    footerSpacing: {
        height: 60,
    },
    contentContainerStyle:{
        paddingBottom: 100
    },
    pressable: {
        padding: 10,
        borderRadius: 4,
        marginHorizontal: 5, 
        borderWidth: 1, 
        borderColor: '#fff',
        width: 100,
        height: 45
    },
    pressableText: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },
    cartButton: {
        position: 'absolute',
        top: 58,
        right: 1,
        backgroundColor: '#f8f8f8',
        padding: 8,
        borderRadius: 16,
        elevation: 2,
    },
    cartButtonText: {
        fontSize: 20,
        color: '#333',
    },
    favoriteButton: {
        position: 'absolute',
        top: 58,
        right: 50,
        backgroundColor: '#f8f8f8',
        padding: 8,
        borderRadius: 16,
        elevation: 2,
    },
    favoriteButtonText: {
        fontSize: 20,
        color: '#333',
    },
});

export default HomeStyles;