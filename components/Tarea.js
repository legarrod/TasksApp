import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View, TouchableHighlight
} from 'react-native';


const Tarea = ({item, tareas, setTareas}) => {

  const eliminarTarea =(id)=>{
   
    const deletetask = tareas.filter(task => task.id !== id);
    setTareas(deletetask);
  };
    return (
        <View style={styles.body} >
          <Text style={styles.encabezado}>{item.nombreTarea}</Text>
          <View>
            <Text style={styles.titulostareas}>Descripcion:</Text>
            <Text style={styles.textNormal}>{item.descripcionTarea}</Text>
          </View>
          <View style={styles.dates}>
            <Text style={styles.titulostareas}>Fecha: </Text>
            <Text style={styles.textNormal}>{item.fecha}</Text>
          </View>
          <View style={styles.dates}>
            <Text style={styles.titulostareas}>Inicio: </Text>
            <Text style={styles.textNormal}>{item.horaInicial}</Text>
          </View>
          <View style={styles.dates}>
            <Text style={styles.titulostareas}>Fin: </Text>
            <Text style={styles.textNormal}>{item.horaFinal}</Text>
          </View>
          <TouchableHighlight onPress={()=> eliminarTarea(item.id)} style={styles.botonCancelar}>
            <Text style={styles.tituloEliminar}>Eliminar tarea </Text>
          </TouchableHighlight>
          
        </View>
      )
}
const styles = StyleSheet.create({
   body:{marginTop: 10, marginHorizontal: 5},
    encabezado: {
      textAlign: 'left',
      marginTop: 10,
      fontSize: 24,
      fontWeight: 'bold',
      color: '#ffffff'
    },
    titulostareas: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
      },
    textNormal: {
        textAlign: 'left',
        fontSize: 16,
        color: '#ffffff'
    },
    dates:{
        display: 'flex',
        flexDirection: 'row',
    },
    tituloEliminar:{
      fontSize: 18,
      textAlign: 'center',
      color: '#ffffff',
      backgroundColor: '#BF1736',
      paddingVertical: 8,
      borderRadius: 10,
      marginTop: 5,
      width: '70%',
      padding: 20
      
    },
    botonCancelar:{
      alignSelf: 'center',
    }
  });

export default Tarea;