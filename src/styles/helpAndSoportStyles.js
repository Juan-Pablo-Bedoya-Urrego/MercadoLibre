import { StyleSheet } from 'react-native';

const helpAndSoportStyles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    padding:20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  label: {
    fontSize: 27,
    fontWeight: '500',
    marginBottom: 15,
    color:'black'
  },
  requestTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  requestTypeButton: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#00b8eb',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#6200ee',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '500',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  submitButton: {
    backgroundColor: '#00b8eb',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default helpAndSoportStyles;