import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
        backgroundColor:'#737380',
    },
    
    loginBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },

    button:{
        backgroundColor: '#fff'
    }
})