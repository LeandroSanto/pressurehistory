import React from 'react';
import { View, Text } from 'react-native';
import { LineChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import styles from '../Sign-in/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function History(){
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    const data2 = [10, 50, 90, 5, -6, -70, 20, 10, 10, 20, -5, 10, 50, 20, -40]
    const contentInset = { top: 20, bottom: 20 }

    return (
        <View style={styles.container}>
            <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}ºC`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={contentInset}
                >
                <Grid />
                </LineChart>
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data2}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={contentInset}
                >
                <Grid />
                </LineChart>
            </View>
            <View style={styles.list}>
                <View>          
                        <Text>Data: 14/05/2020 </Text>
                        <Text>Pressão: 12/8</Text>
                </View>
                <View>
                    <TouchableOpacity><Text>Editar</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Excluir</Text></TouchableOpacity>
                </View>
            </View>
            <View>          
                    <Text>Data: 14/05/2020 </Text>
                    <Text>Pressão: 12/8</Text>
            </View>
            <View>          
                    <Text>Data: 14/05/2020 </Text>
                    <Text>Pressão: 12/8</Text>
            </View>
            <View>          
                    <Text>Data: 14/05/2020 </Text>
                    <Text>Pressão: 12/8</Text>
            </View>
            <View>          
                    <Text>Data: 14/05/2020 </Text>
                    <Text>Pressão: 12/8</Text>
            </View>
            <View>          
                    <Text>Data: 14/05/2020 </Text>
                    <Text>Pressão: 12/8</Text>
            </View>
            <View>          
                    <Text>Data: 14/05/2020 </Text>
                    <Text>Pressão: 12/8</Text>
            </View>

            <View>          
                    <Text>Data: 14/05/2020 </Text>
                    <Text>Pressão: 12/8</Text>
            </View>
            <View>          
                    <Text>Data: 14/05/2020 </Text>
                    <Text>Pressão: 12/8</Text>
            </View>
        </View>  
    )
}