import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList, StatusBar, TouchableHighlight
} from 'react-native';
import Tarea from "./components/Tarea";
import Formulario from "./components/Formulario/Formulario"

const App = () => {
  const [viewForm, setViewForm] = useState(false)
  const [tareas, setTareas] = useState([]);

  //mostrar o ocultar formulario
   const hiddeForm =()=>{
    setViewForm(!viewForm);
   }
  return (
    <View style={styles.contenedor}>
       <Text style={styles.encabezado}>
          {tareas.length > 0 ? 'Tareas pendientes' : 'Crear nueva tarea'}
        </Text>
        {
          !viewForm && <View>
              <TouchableHighlight onPress={()=> hiddeForm()} style={styles.botonGuardar}>
                  <Text style={styles.textoGuardar}>Agregar Tarea</Text>        
              </TouchableHighlight>
        </View>
        }
        
        {
          viewForm ? (
            <Formulario tareas={tareas} setTareas={setTareas} setViewForm={setViewForm}/>
          ): (
            <FlatList
            data={tareas}
            renderItem={({item})=><Tarea item={item} tareas={tareas} setTareas={setTareas}/>}
            keyExtractor={cita=>cita.id}
            />
          )
        }

    

    </View>
  );
};

const styles = StyleSheet.create({
  contenedor:{backgroundColor: '#0D1440', flex:1, paddingTop: StatusBar.currentHeight,},
  inputs:{backgroundColor: '#fff000', borderColor: '#0000'},
  encabezado: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  textoGuardar: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
},
botonGuardar: {
    backgroundColor: '#BF1736',
    paddingVertical: 5,
    marginHorizontal: 10,
    marginTop: 10,
}
});

//colores #0D1440 azul oscuro, #0E2773 azul menos oscuro, #1438A6 el que le sigue, #1455D9 azul mas claro y #BF1736 rojo contraste

export default App;
