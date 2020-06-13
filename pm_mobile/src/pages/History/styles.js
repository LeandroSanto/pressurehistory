import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20,
        backgroundColor:'#d4d4d4',
    },
    
    headerBar:{
        padding: 30,
        marginBottom: 20,

        flexDirection: "row",
        justifyContent: "space-between",
        
        backgroundColor: "#fff",

        borderRadius: 4,
    },

    headerBarText:{
        fontSize: 20,
        fontWeight: "bold",
    },

    headerBarPerfil:{
        maxHeight: 30,
        maxWidth: 30,
    },

    chartContainer:{
        paddingHorizontal: 5,
        paddingTop: 15,
        borderRadius: 8,
        backgroundColor: "#ffff",
    },

    list:{
        flex: 1,
        marginTop: 20,
        backgroundColor: "#efefef",
        borderRadius: 4,
        paddingHorizontal: 15,
    },

    listItem:{
       
        marginTop: 10,  
        width: "100%",
        marginRight:30,
        paddingVertical: 20,
        backgroundColor: "#fff",
        borderRadius: 4,
        paddingHorizontal: 30,
        shadowColor: "#333333",
        
    },

    listItemTextNormal:{
        fontSize: 18,
        alignSelf: "center",
        justifyContent: "space-between",
    },

    listItemTextDestak:{
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
    },

    preassureTextRed:{
        fontSize:18,
        fontWeight: "bold",
        color: "red",
        marginRight: 5,
    },
    preassureTextBlue:{
        fontSize:18,
        fontWeight: "bold",
        color:"blue",
        marginLeft: 5,

    },

    listBoxButton:{
        marginTop: 10,
        flexDirection: 'row',
        alignItems: "center",   
        justifyContent: "space-between",
   },

   listBoxButtonText:{
        fontSize: 18,
        fontWeight: "bold",
   },

   editButton:{
       backgroundColor: "#4fa7ff",
       borderRadius: 4,
       paddingHorizontal: 45,
       paddingVertical:10,
   },

   excludeButton:{
       backgroundColor: "#ff6464",
       borderRadius: 4,
       paddingHorizontal: 45,
       paddingVertical:10,
   },
})