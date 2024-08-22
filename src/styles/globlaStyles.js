import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    tittleMain: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        marginBottom: 8,
        color: '#000000',
    },
    placeholder:{
        color: 'black'
    },
    principalButon: {
        backgroundColor: '#00B8EB',
        marginTop: 25,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 16,
    },
    principalButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default globalStyles;