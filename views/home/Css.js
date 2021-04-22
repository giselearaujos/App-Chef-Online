import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#AA2B1D',
      alignItems: 'center',
      justifyContent: 'center',
    },
    home: {      
      width:350, 
      backgroundColor: '#CC561E',
      padding:10,
      borderRadius: 5,    
    },
    text_home: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      color: '#fff',
      marginBottom: 15
    },
    input_home: {
      backgroundColor: '#fff',
      fontSize: 20,
      padding:10,
      marginHorizontal: 10,
      borderRadius: 5
    },
    button_home: {
      backgroundColor: '#AA2B1D',
      fontSize: 20,
      padding:15,
      margin:10,
      borderRadius: 5
    },
    button_text: {fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',}
  });

export {css};  