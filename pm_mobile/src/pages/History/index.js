import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PureChart from 'react-native-pure-chart';

import styles from '../History/styles';

export default function History(){
    
        // const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        var data = [
                {seriesName: 'systolic', data: [12, 14, 18, 12, 20], color: 'red'},
                {seriesName: 'diastolic', data: [8, 12, 12, 8, 18], color: 'blue'}
        ]
    /*    
        const data2 = [10, 50, 90, 5, -6, -70, 20, 10, 10, 20, -5, 10, 50, 20, -40]
        const contentInset = { top: 20, bottom: 20 }
    */
    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                    <Text style={styles.headerBarText}>Monitor de Pressão</Text>
                    <TouchableOpacity style={styles.headerBarPerfil}><Text>Perfil</Text></TouchableOpacity>
            </View>

            <View style={styles.chartContainer}>
                <PureChart type={'line'}
                data={data}
                width={'100%'}
                height={200}
                customValueRenderer={(index, point) => {
                if (index % 2 === 0) return null
                return (
                        <Text style={{textAlign: 'center'}}>{point.y}</Text>
                )
                }}/>        

            </View>
            <View style={styles.list}>
                <View style={styles.listItem}>          
                          <Text style={styles.listItemTextNormal}>Data: 14/05/2020 </Text>
                          <Text style={styles.listItemTextDestak}>Pressão: <Text style={styles.preassureTextRed}>12</Text>/<Text style={styles.preassureTextBlue}>8</Text></Text>                        
                        
                        <View style={styles.listBoxButton}>
                                <TouchableOpacity style={styles.editButton}><Text style={styles.listBoxButtonText}>Editar</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.excludeButton}><Text style={styles.listBoxButtonText}>Excluir</Text></TouchableOpacity>
                        </View>
                </View>

                <View style={styles.listItem}>          
                          <Text style={styles.listItemTextNormal}>Data: 14/05/2020 </Text>
                          <Text style={styles.listItemTextDestak}>Pressão: <Text style={styles.preassureTextRed}>12</Text>/<Text style={styles.preassureTextBlue}>8</Text></Text>                        
                        
                        <View style={styles.listBoxButton}>
                                <TouchableOpacity style={styles.editButton}><Text style={styles.listBoxButtonText}>Editar</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.excludeButton}><Text style={styles.listBoxButtonText}>Excluir</Text></TouchableOpacity>
                        </View>
                </View>

                <View style={styles.listItem}>          
                          <Text style={styles.listItemTextNormal}>Data: 14/05/2020 </Text>
                          <Text style={styles.listItemTextDestak}>Pressão: <Text style={styles.preassureTextRed}>12</Text>/<Text style={styles.preassureTextBlue}>8</Text></Text>                        
                        
                        <View style={styles.listBoxButton}>
                                <TouchableOpacity style={styles.editButton}><Text style={styles.listBoxButtonText}>Editar</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.excludeButton}><Text style={styles.listBoxButtonText}>Excluir</Text></TouchableOpacity>
                        </View>
                </View>

                <View style={styles.listItem}>          
                          <Text style={styles.listItemTextNormal}>Data: 14/05/2020 </Text>
                          <Text style={styles.listItemTextDestak}>Pressão: <Text style={styles.preassureTextRed}>12</Text>/<Text style={styles.preassureTextBlue}>8</Text></Text>                        
                        
                        <View style={styles.listBoxButton}>
                                <TouchableOpacity style={styles.editButton}><Text style={styles.listBoxButtonText}>Editar</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.excludeButton}><Text style={styles.listBoxButtonText}>Excluir</Text></TouchableOpacity>
                        </View>
                </View>

             </View>
        </View>  
    )
}