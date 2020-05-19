import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
        backgroundColor:'#e4e4e4',
    },
    
    loginBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
    },

    button:{
        marginTop: 35,
        borderRadius: 4,
        backgroundColor: '#8080ff',
    },

    buttonText:{
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
        fontSize: 25,
    },

    buttonTText:{
        marginTop: 35,
        borderRadius: 4,
        color: '#808080',
        alignSelf: 'center',
    },
})