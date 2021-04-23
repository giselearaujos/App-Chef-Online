import React from 'react';
import { View, Image, TouchableOpacity, Text} from 'react-native';
import {css} from './Css';

export default function Home(){
    return(        
        <View style={css.container}> 
            <Text style={css.title}>Encontre sua comida favorita 🍱 </Text>                                      
            <TouchableOpacity>
                <View style={css.wrap}>
                <Image source={require('../../assets/img/burger.png')}
                style={css.options_foods} />                
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={css.wrap}>
                <Image source={require('../../assets/img/pizza.png')}
                style={css.options_foods} /> 
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={css.wrap}>
                <Image source={require('../../assets/img/chicken.png')}
                style={css.options_foods} /> 
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={css.wrap}>
                <Image source={require('../../assets/img/taco.png')}
                style={css.options_foods} /> 
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={css.wrap}>
                <Image source={require('../../assets/img/soda.png')}
                style={css.options_foods} /> 
                </View>
            </TouchableOpacity>                     
        </View>
    );
}