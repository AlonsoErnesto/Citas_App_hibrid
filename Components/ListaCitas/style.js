import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   cita:{
      backgroundColor:'#fff',
      marginVertical:15,
      marginHorizontal:30,
      borderRadius:20,
      paddingTop:10,
   },
   card:{
      flexDirection:'row',
      paddingHorizontal:10,
      paddingLeft:15,
   },
   label:{
      fontWeight:'400',
      fontSize:20,
      marginTop:4,
   },
   text:{
      color:'red',
      fontSize:20,
      fontWeight:'300',
      marginLeft:5,
      marginTop:4,
   },
   btn:{
      flex: 1,
      justifyContent: 'flex-end',
   },
   buttonDelete:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'red',
      marginTop:20,
      height:40,
      borderBottomStartRadius:20,
      borderBottomEndRadius:20,
   },
   textBtn:{
      color:'#fff',
      
   }
})

export default styles;