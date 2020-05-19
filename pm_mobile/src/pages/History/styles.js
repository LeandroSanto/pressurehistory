import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
        backgroundColor:'#e4e4e4',
    },

    list:{
        flex: 1,
        flexDirection: 'row',
    },
})