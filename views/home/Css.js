import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,      
      backgroundColor: '#AA2B1D',          
      justifyContent: 'space-evenly',   
      alignItems: 'center',     
    },  
    title: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 18,
      backgroundColor: '#FFF',
      textAlign: 'center',
      marginHorizontal: 15,
      padding:15,
      borderRadius: 5
    },
    wrap: {
      backgroundColor: '#fff',
      height: 60,
      width: 60,
      marginHorizontal: 15,
      paddingHorizontal: 150,
      borderRadius:5,
      alignItems: 'center',
      justifyContent: 'center',    
    }    
});

export {css};  