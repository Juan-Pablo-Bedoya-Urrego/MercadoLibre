import { StyleSheet } from 'react-native'

const productDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    imagen: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    item: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        color: '#000'
    },
    descripcion: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 5,
        color: '#000'
    },
    valor: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 5,
        color: '#000'
    },
    caracteristicas: {
        fontSize: 14,
        marginVertical: 5,
        color: '#000'
    },
    medioPago: {
        fontSize: 14,
        marginVertical: 5,
        color: '#000'
    },
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        color: '#000'
    },
    calificacion: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    starPressable: {
        marginHorizontal: 5,
        borderRadius: 5,
    },
    star: {
        fontSize: 30,
        color: '#FFD700',
    },
    commentSection: {
        marginTop: 10,
    },
    mainButon: {
        backgroundColor: '#00B8EB',
        paddingVertical: 12,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    mainButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default productDetailStyles;