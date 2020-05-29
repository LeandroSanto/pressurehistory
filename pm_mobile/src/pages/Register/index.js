import React from 'react';
import { View, Text, TextInput, TouchableOpacity, UseEffect} from 'react-native';
import {useNavigation} from '@react-navigation/native';


import styles from './styles';

export default function Register(){
    const navigation = useNavigation();

    function navigateToMedic(){
        navigation.navigate( 'medicRegister' );
    }

    function navigateToPatient(){
        navigation.navigate( 'patientRegister' );
    }

    return(
        <View style={styles.container}>
            <View style={styles.centerBox}>
                <View style={styles.card}>
                    <Text style={styles.textCard}>Para proceguir, é necessário a crição de um usuário.</Text>
                    <Text style={styles.textCard}>Por favor, responda: você é um médico ou um paciente?</Text>
            
                </View>          

                <View>
                    <TouchableOpacity onPress={navigateToMedic} style={styles.button} ><Text style={styles.buttonText}>Sou Um Médico</Text></TouchableOpacity>
                    <TouchableOpacity onPress={navigateToPatient} style={styles.button}><Text style={styles.buttonText}>Sou Um Paciente</Text></TouchableOpacity>
                </View>  
            </View>
        </View>
    )
}