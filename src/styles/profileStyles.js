import { StyleSheet } from 'react-native';

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  firstTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#00b8eb'
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    color:'#00b8eb'
  },
  iconButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#6200EE',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },
});

export default profileStyles;