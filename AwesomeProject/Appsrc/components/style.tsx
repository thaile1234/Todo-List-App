import {StyleSheet} from 'react-native'
const styles=StyleSheet.create({
    HeaderComponent:{
         backgroundColor:'#ECCD7E',
        paddingTop:30,
        flexDirection:'row',
        padding:10,
        borderBottomEndRadius:15,
        borderBottomLeftRadius:15,
    },
    icon:{
        width:20,
        height:20,

    },
    txtHeader:{
        color:'white',
        textAlign:'center',
        flex:1,
        fontSize:20,
        fontWeight:'bold',
    },
    txtInputComponent:{
        width:'70%',
        borderWidth:1,
        backgroundColor:'white',
        borderRadius:10,
        paddingLeft:5,
        alignSelf:'center',
    },
    txtInput:{
        flex:1,
    }
})
export default styles;