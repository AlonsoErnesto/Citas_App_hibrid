import React from 'react';

import {
   View,
   Text,
   TouchableHighlight,
} from 'react-native';

import styles from './style';

const Cita = ({item,deleteTask}) => {

   return (
      <View style={styles.cita}>
         <View style={styles.card}>
            <Text style={styles.label}>Paciente :</Text>
            <Text style={styles.text}>{item.paciente}</Text>
         </View>
         <View style={styles.card}>
            <Text style={styles.label}>Propietario :</Text>
            <Text style={styles.text}>{item.propietario}</Text>
         </View>
         <View style={styles.card}>
            <Text style={styles.label}>Sintomas :</Text>
            <Text style={styles.text}>{item.sintomas}</Text>
         </View>
         <View style={styles.btn}>
            <TouchableHighlight onPress={()=>deleteTask(item.id)} style={styles.buttonDelete}>
               <Text style={styles.textBtn}>Eliminar &times;</Text>
            </TouchableHighlight>
         </View>
      </View>
   )
}

export default Cita;