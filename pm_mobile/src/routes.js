import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Signin from './pages/Signin';
import Register from './pages/Register';
import History from './pages/History';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name = "Signin" component = {Signin} />
                <AppStack.Screen name = "Register" component = {Register} />
                <AppStack.Screen name = "History" component = {History} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}