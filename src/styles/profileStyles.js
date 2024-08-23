import { StyleSheet } from 'react-native';

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  firstTitle: {
    paddingHorizontal:'auto',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#00b8eb',
  },
  imageContainer: {
    width: 150,
    height: 200,
    borderRadius: 60,
    marginBottom: 30,
  },
  text: {
    alignItems:'center',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#black'
  }, 
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },

});

export default profileStyles;