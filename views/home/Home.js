import React from 'react';
import { View, TextInput, } from 'react-native';
import {css} from './Css';

export default function Home(){
    return(
        <View style={css.container}>
           <View style={css.home}>                
                <TextInput style={css.input_home} 
                            placeholder='Busque sua comida favorita...'
                    />                    
            </View> 
           
        </View>
    );
}