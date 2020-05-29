import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Signin from './pages/Sign-in';
import Register from './pages/Register';
import History from './pages/History';
import MedicRegister from './pages/Register/medicRegister';
import PatientRegister from './pages/Register/patientRegister';


export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name = "Sign-in" component = {Signin} />
                <AppStack.Screen name = "Register" component = {Register} />
                <AppStack.Screen name = "History" component = {History} />
                <AppStack.Screen name = "medicRegister" component = {MedicRegister} />
                <AppStack.Screen name = "patientRegister" component = {PatientRegister} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}