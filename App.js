import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView,TouchableHighlight,TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Cita from './Components/ListaCitas';
import Formulario from './Components/Formulario';


const App = () => {

  const [citas, setCitas] = useState([
    {
      id:"1",
      paciente:"Andrea",
      propietario:"Ernesto",
      sintomas:"Deprecion"
    },
    {
      id:"2",
      paciente:"Melissa",
      propietario:"Ernesto",
      sintomas:"Deprecion"
    },
    {
      id:"3",
      paciente:"Claudia",
      propietario:"Ernesto",
      sintomas:"Deprecion"
    }
  ]);
  const [showForm, setShowForm] = useState(false);

  const deleteTask = id => {
    const citaActual = citas.filter((cita) => cita.id !== id);
    setCitas(citaActual);
  };

  const closekeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={()=>closekeyboard()}>
      <LinearGradient 
          start={{x: 0, y: 1}} end={{x: 0, y: 0}} 
          style={styles.view}
          colors={['rgba(18, 194, 233, 1)', 'rgba(196, 113, 237, 1)','rgba(246, 79, 89, 1)']}
          >
        <Text style={styles.title}>Admistrador de Citas!</Text>
        <ScrollView scrollEnabled={true}>
          <TouchableHighlight style={styles.button} onPress={()=>setShowForm(prev => !prev)}>
            <Text style={styles.textBtn}>{showForm ? 'Cerrar Formulario' : 'Nueva Cita'}</Text>
          </TouchableHighlight>
          { showForm ? <Formulario setShowForm={setShowForm} citas={citas} setCitas={setCitas}/> : ''}
          { showForm ? '' : (
            <>
              <Text style={styles.subtitle}>{ citas.length > 0 ? 'Administrador de Citas!' : 'No tienes citas'}</Text>
              <FlatList
                data={citas}
                renderItem={({item})=> <Cita item={item} deleteTask={deleteTask}/>}
                keyExtractor={cita => cita.id}
              />
            </>
          )}
          
          </ScrollView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}


// STYLESHEET
const styles = StyleSheet.create({
  view:{
    minHeight:'100%',
  },
  title:{
    textAlign:'center',
    fontSize:30,
    marginBottom:15,
    color:'#fff',
    marginTop:40,
    fontWeight:'300',
  },
  subtitle:{
    fontSize:20,
    color:'#fff',
    textAlign:'center',
  },
  button:{
    backgroundColor:'#2BC0E4',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:30,
    marginVertical:10,
    borderRadius:10,
    height:40    
  },
  textBtn:{
    color:'#fff',
  }
});


export default App;