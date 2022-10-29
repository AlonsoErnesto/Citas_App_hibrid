import { StyleSheet } from "react-native";

const style = StyleSheet.create({
   view: {
      backgroundColor:'#fff',
      padding:10,
      paddingTop:15,
      marginHorizontal:30,
      borderRadius:10
   },
   title:{
      textAlign:'center',
      fontSize:23,
      fontWeight:'300',
      marginBottom:30

   },
   input:{
      borderColor:'red',
      borderBottomWidth:2,
      marginVertical:10,
      fontSize:16,
      width:300,
      marginLeft:20,
      fontWeight:'300'
   },
   formTime:{
      marginTop:20,
   },
   row:{
      flex: 1,
      flexDirection: 'row',
   },
   col1:{
      marginLeft:20,
      width: 140,
      height: 50,
      textAlign:'left'
   },
   col2:{
      width: 160,
      height: 50,
   },
   fecha:{
      fontSize:20,
   },
   hora:{
      fontSize:20
   },
   button:{
      backgroundColor:'#52c234',
      height:40,
      marginTop:20,
      justifyContent:'center',
      borderRadius:10
   },
   textBtn:{
      color:'#fff',
      textAlign:'center'
   }
})

export default style;