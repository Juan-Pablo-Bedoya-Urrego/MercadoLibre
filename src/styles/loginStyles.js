import { StyleSheet } from 'react-native'

const loginStyles = StyleSheet.create({
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        marginBottom: 8,
        color: '#000000',
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        marginBottom: 16,
        backgroundColor: '#fff',
        color: 'black',
    },
    placeholder:{
        color: 'black'
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    footerText: {
        fontSize: 14,
        color: '#000000',
    },
    footerLink: {
        fontSize: 14,
        color: '#00B8EB',
        marginLeft: 4,
    },
});

export default loginStyles;