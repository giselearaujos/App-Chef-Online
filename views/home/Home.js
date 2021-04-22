import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import {css} from './Css';

export default function Home(){
    return(
        <View style={css.container}>
           <View style={css.home}>
                <Text style={css.text_home}>O que você está procurando?</Text>
                <TextInput style={css.input_home} 
                            placeholder='Digíte sua comida favorita...'
                    />
                <TouchableOpacity style={css.button_home}>
                    <Text style={css.button_text}>Entrar</Text>
                </TouchableOpacity>    
            </View> 
        </View>
    );
}