import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  LoginScreen: {
    flex: 1,
    backgroundColor: '#FDF7E4',
  },
  txt: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 230,
  },
  txtSumbmit: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:5,
    borderWidth:1,
    marginHorizontal:140,
    padding:5,
    borderRadius:10,
    backgroundColor:'#ECCD7E',
  },
  txtView: {
    marginBottom:15,
  },
  txtRegister:{
    fontSize:22,
    color:'white',
    fontWeight:'bold',
    textAlign:'right',
    marginRight:65,
    marginTop:10,
  },
  txtForgotPasswork:{
       fontSize:22,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    marginTop:10,
  },
  imgUser:{
    marginTop:20,
    alignSelf:'center',
    width:150,
    height:150,
  },
  txtUser:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:20,
    padding:15,
    backgroundColor:'#F0ECE5',
    alignItems:'center',
    marginTop:20,
    borderRadius:5,
  },
  txtName:{
    fontSize:17,
  },
  LogAcc:{
     
    marginTop:20,
    borderWidth:1,
    padding:10,
    borderRadius:10,
    backgroundColor:'#ECCD7E',
    alignItems:'center',
    marginHorizontal:130,
  },
  txtLogAcc:{
     color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
   container:{
        flex:1,
        backgroundColor:'#F0ECE5',
        
      },
   body:{
    flex:5,
    marginTop: 40,
    marginHorizontal:40,
   },
   text:{
   flex:1,
   backgroundColor:'red',
   },
   headerTolist:{
    fontSize:30,
    color:'red',
    fontWeight:'bold',
    marginBottom:10,
   },
});
export default styles;
