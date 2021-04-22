import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo_input: {      
      alignItems: 'center',
      marginBottom: 20,
      height: 65,           
    },    
    form_login: {
      width: 300,          
    },
    input_login: {
      backgroundColor: "#fff",
      fontSize: 20,
      padding: 7,
      marginBottom: 15,
      borderRadius: 5
    },
    button_login: {
      padding: 12,
      backgroundColor: "#AA2B1D",
      borderRadius: 5,
    },
    buttonText: {
      textAlign: "center",
      fontSize: 20,
      color: "#fff"
    },
    msg_error: {
      color: "#fff",
      textAlign: "center",
      fontSize: 20,
      marginTop: 15,
    }


  });

export {css};  