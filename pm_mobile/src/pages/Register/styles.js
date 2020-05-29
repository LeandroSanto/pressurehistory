import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
        backgroundColor:'#515151',
    },

    centerBox:{
        flex: 1,
        justifyContent: 'center',
    },

    card:{
        backgroundColor: '#e4e4e4',
        marginTop: 40,
        marginBottom:40,
        borderRadius: 4,
    },

    textCard:{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 25,
        marginBottom: 20,
    },

    textRegister:{
        marginTop: 20,
        fontSize: 20,
        marginBottom: 5,       
        marginLeft:10,
    },

    inputTextRegister:{
        marginLeft: 10,
        fontSize: 18,
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