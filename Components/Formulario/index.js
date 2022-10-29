import React, {useState} from 'react';
import { Text, View,TextInput, TouchableHighlight, Button, Alert } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import shortid from 'shortid';
import style from './style'

const Formulario = ({setShowForm,citas,setCitas}) => {

   const [paciente, setPaciente] = useState('');
   const [propietario, setPropietario] = useState('');
   const [telefono, setTelefono] = useState('');
   const [sintomas, setSintomas] = useState('');
   const [fecha, setFecha] = useState('');
   const [hora, setHora] = useState('');
   const [hr24, setHr24] = useState(''); // PM - AM

   const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
   const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);

   const showDatePicker = () => { setIsDatePickerVisible(true)};
   const hideDatePicker = () => { setIsDatePickerVisible(false)};

   const showTimePicker = () => { setIsTimePickerVisible(true)};
   const hideTimePicker = () => { setIsTimePickerVisible(false)};

   const showAlert = () => {
      Alert.alert(
         'Error',
         'Llene todos los campos requeridos.',
         [{
            text:'Aceptar'
         }]
      )
   };

   const handleConfirmDate = date =>{
      const opciones = {  
         weekday: "long", 
         year: "numeric", 
         month: "short", 
         day: "numeric" 
      };
      setFecha(date.toLocaleDateString('es-ES',opciones));
      hideDatePicker();
   };

   const handleConfirmTime = hora =>{
      const opciones = { hour: "numeric", minute: "numeric" };
      const hourTemp = hora.toLocaleTimeString('es-PE',opciones).toString();
      const hourFinal = hourTemp.substr(0,5);
      const condition = hourFinal.substr(0,2);
      if(condition <= 23 && condition >= 12){
         setHr24('P.M.');
      } else {
         setHr24('A.M.');
      }
      setHora(hourFinal);
      hideTimePicker();
   };

   const newTask = () => {
      if( paciente.trim() === '' 
         || propietario.trim() === '' 
         || telefono.trim() === '' 
         || sintomas.trim() === ''
         || fecha.trim() === ''
         || hora.trim() === ''
      ){
         // Validacion erronea
         showAlert();
         return;
      }
      // Creando nueva Cita
      const cita = { paciente, propietario, telefono, fecha, hora, sintomas };
      cita.id = shortid.generate();
      const citasNew = [ ...citas,cita ];
      setCitas(citasNew);
      setShowForm(false);

   };


   return ( 
      <View>
         <View style={style.view}>
            <Text style={style.title}>Crear nueva Cita!</Text>
            <TextInput onChangeText={(text)=>setPaciente(text)} placeholder='Nombre del Paciente' style={style.input}/>
            <TextInput onChangeText={(text)=>setPropietario(text)} placeholder='Nombre del Dueño' style={style.input}/>
            <TextInput onChangeText={(text)=>setSintomas(text)} placeholder='Nombre del Sintoma' style={style.input} multiline/>
            <TextInput 
               onChangeText={(text)=>setTelefono(text)} 
               placeholder='Numero de celular' style={style.input}
               keyboardType='numeric'
            />
            <View style={style.formTime}>
            <View style={style.row}>
               <View style={style.col1}>
                  <Text style={style.fecha}>{fecha ? `${fecha}` : 'Fecha'}</Text>
               </View>
               <View style={style.col2}>
                  <Button title="Seleccionar Fecha" onPress={showDatePicker}/>
                  <DateTimePickerModal
                     isVisible={isDatePickerVisible}
                     mode="date"
                     onConfirm={handleConfirmDate}
                     onCancel={hideDatePicker}
                     locale="es_ES"
                  />
               </View>
            </View>
            <View style={style.row}>
               <View style={style.col1}>
                  <Text style={style.hora}>{hora ? `${hora} ${hr24}` : 'Hora'}</Text>
               </View>
               <View style={style.col2}>
                  <Button title="Seleccionar Hora" onPress={showTimePicker}/>
                  <DateTimePickerModal
                     isVisible={isTimePickerVisible}
                     mode="time"
                     onConfirm={handleConfirmTime}
                     onCancel={hideTimePicker}
                     locale="es_ES"
                     is24Hour
                  />
               </View>
            </View>
            </View>
            <TouchableHighlight style={style.button} onPress={()=>newTask()}>
               <Text style={style.textBtn}>Guardar</Text>
            </TouchableHighlight>
         </View>
      </View>
   )
}


export default Formulario;
