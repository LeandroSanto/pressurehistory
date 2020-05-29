import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function MedicRegister(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.textRegister}>Nome:</Text>
                <TextInput style={styles.inputTextRegister} placeholder="Insira seu nome"/>
                <Text style={styles.textRegister}>Senha:</Text>
                <TextInput style={styles.inputTextRegister} placeholder="Informe uma senha"/>
                <Text style={styles.textRegister}>Repita a Senha:</Text>
                <TextInput style={styles.inputTextRegister} placeholder="Repita a senha digitada"/>
                <Text style={styles.textRegister}>CRM</Text>
                <TextInput style={styles.inputTextRegister} placeholder="Insira seu CRM"/>
                <Text style={styles.textRegister}>WhatsApp:</Text>
                <TextInput style={styles.inputTextRegister} placeholder="Informe o número do seu celular"/>
                <Text style={styles.textRegister}>Cidade:</Text>
                <TextInput style={styles.inputTextRegister} placeholder="Informe a sua cidade"/>
                <Text style={styles.textRegister}>UF:</Text>
                <TextInput style={styles.inputTextRegister} placeholder="Informe seu estado"/>
            </View>

            <View>
                <TouchableOpacity><Text>Registrar</Text></TouchableOpacity>
            </View>
        </View>
    )
}