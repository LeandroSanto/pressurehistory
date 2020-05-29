import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default function Signin(){
    const navigation = useNavigation();
    
    function navigateToHistory(){
        navigation.navigate( 'History' );
    }

    function navigateToRegister(){
        navigation.navigate( 'Register' );
    }
    return(
        <View style={styles.container}>
            <View style={styles.centerBox}>
                        
            <View style={styles.loginBox}>
                <TextInput placeholder='Informe seu Telefone' keyboardType='phone-pad' maxLength={11}/>
                <TextInput placeholder='Digite a sua senha' keyboardType='number-pad' />

                <View>
                    <TouchableOpacity onPress={navigateToHistory} style={styles.button}><Text style={styles.buttonText}>Entrar</Text></TouchableOpacity>
                    <TouchableOpacity onPress={navigateToRegister} style={styles.buttonTText}><Text>Criar Conta</Text></TouchableOpacity>
                </View>
            </View>
            </View>
        </View>
    )
};