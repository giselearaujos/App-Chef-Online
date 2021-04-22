import React from 'react';
import { 
    Text,
    View,
    Platform,
    ImageBackground,
    Image,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {css} from './Css';

import {api} from '../../src/service/api';

export default function Login(){
    const navigation = useNavigation()

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errorLogin, setErrorLogin] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    
    const handleLogin = React.useCallback(async () =>{
        if(!email || !password){
           return  console.log("FOI")
        }
        try {
            setErrorLogin(false);
            setLoading(true);
            const {data} = await api.post('api-token-auth/',{
               email,
               password 
            })
            setLoading(false);
          navigation.navigate('Home');  
        } catch (error) {
            if(error.response.status === 400){
                setErrorLogin(true)
                return setLoading(false);
            }
        }   
    },[email,password]); 
   
    return(
        <ImageBackground source={require('../../assets/img/background.png')}
        style={css.container}
        >
            <KeyboardAvoidingView behavior=
            {Platform.OS == "ios" ? "padding" : "height"}>
                <View style={css.logo_input}>
                    <Image source={require('../../assets/img/logo-icon.png')} />
                </View>                
                <View style={css.form_login}>
                    <TextInput style={css.input_login}
                    placeholder='Digíte seu email...' value={email} 
                    onChangeText={setEmail}/>
                    <TextInput style={css.input_login} 
                    placeholder='Digíte sua senha...'value={password} 
                    secureTextEntry={ true } onChangeText={setPassword}
                    /> 
                    <TouchableOpacity onPress={handleLogin} style={css.button_login}>
                       {loading ?  <ActivityIndicator size="small"
                        color="#fff"/> : <Text style={css.buttonText}>Entrar</Text>}
                    </TouchableOpacity> 
                    {errorLogin && <Text style={css.msg_error}>Email ou senha inválidos</Text>}                  
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}