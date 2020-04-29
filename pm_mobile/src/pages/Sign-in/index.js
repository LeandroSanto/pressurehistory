import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Signin(){
    return(
        <View style={styles.container}>
            <Text>Tela de Login</Text>
            
            <View style={styles.loginBox}>
                <TextInput placeholder='Informe seu Telefone' keyboardType='phone-pad' maxLength={11}/>
                <TextInput placeholder='Digite a sua senha' keyboardType='number-pad' />

                <View>
                    <TouchableOpacity><Text>Entrar</Text></TouchableOpacity>
                </View>
            </View>

        </View>
    )
};