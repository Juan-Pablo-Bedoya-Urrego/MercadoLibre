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
    eyeIcon: {
        position: 'absolute',
        right: 10,
        padding: 5,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 24,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberMeText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#000000',
    },
    forgotPassword: {
        fontSize: 14,
        color: '#6C63FF',
    },
    loginButton: {
        backgroundColor: '#00B8EB',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginBottom: 16,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
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