import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View, Button, ScrollView, TouchableHighlight, Alert
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Formulario = ({tareas, setTareas, setViewForm}) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisibleInicial, setTimePickerVisibilityInicial] = useState(false);
    const [isTimePickerVisibleFinal, setTimePickerVisibilityFinal] = useState(false);
    const [nombreTarea, setNombreTarea] = useState('');
    const [descripcionTarea, setDescripcionTarea] = useState('');
    const [fecha, setFecha] = useState('');
    const [horaInicial, setHoraInicial] = useState('');
    const [horaFinal, setHoraFinal] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const options = {year: 'numeric', month: 'long', day: "2-digit"};
    setFecha(date.toLocaleDateString('es-ES', options));
    hideDatePicker();
  };

  //mostramos u ocultamos el time picker hora inicial

  const showTimePickerInitial = () => {
    setTimePickerVisibilityInicial(true);
  };

  const hideTimePickerInicial = () => {
    setTimePickerVisibilityInicial(false);
  };
  const confirmarHoraIncial = (time) => {
    const options ={hour: 'numeric', minute: '2-digit', hour12: true};
    setHoraInicial(time.toLocaleString('es-ES', options));
    hideTimePickerInicial();
  };
   //mostramos u ocultamos el time picker hora final

   const showTimePickerFinal = () => {
    setTimePickerVisibilityFinal(true);
  };

  const hideTimePickerFinal = () => {
    setTimePickerVisibilityFinal(false);
  };
  const confirmarHoraFinal = (time) => {
    const options ={hour: 'numeric', minute: '2-digit', hour12: true};
    setHoraFinal(time.toLocaleString('es-ES', options));
    hideTimePicker();
  };

  const crearNuevaTarea =()=>{

    if (nombreTarea.trim() === '' || 
        descripcionTarea.trim() === '' || 
        fecha.trim() === '' || 
        horaInicial.trim() === '' || 
        horaFinal.trim() === '') {
            mostrarAlert()
    }else{
      const nuevaTarea = { nombreTarea, descripcionTarea, fecha, horaInicial, horaFinal};
    nuevaTarea.id = shortid.generate();
    //agregar al arreglo
    const tareaNueva = [...tareas, nuevaTarea]
    setTareas(tareaNueva);
    setViewForm(false);
    }
   
    
  }
  const cancelarTarea =()=>{
    setViewForm(false);
  };

  const mostrarAlert = ()=>{
      Alert.alert(
          'Error',
          'Todos los campos son requeridos',
          [{
              text: 'Ok'
          }]
      )
  }
    return (
        <>
        <ScrollView style={styles.scrollView}>
            <View style={styles.principal}>
                    <View>
                        <Text style={styles.label}>Nombre:</Text>
                        <TextInput style={styles.imput} onChangeText={text=> setNombreTarea(text)}/>
                    </View>
                    <View>
                        <Text style={styles.label}>Descripcion:</Text>
                        <TextInput
                        style={styles.imput}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={text => setDescripcionTarea(text)}
                        />
                    </View>
                    <View style={styles.buttons}>
                        <Button title="Selecciona una fecha" onPress={showDatePicker} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={confirmarFecha}
                            onCancel={hideDatePicker}
                        />
                        <Text style={styles.labelValues}>{fecha}</Text>
                    </View>
                    <View>
                        <View style={styles.buttons}>
                            <Button title="Hora inicial" onPress={showTimePickerInitial} />
                            <DateTimePickerModal
                                isVisible={isTimePickerVisibleInicial}
                                mode="time"
                                onConfirm={confirmarHoraIncial}
                                onCancel={hideTimePickerInicial}
                                locale='es-ES'
                            />
                            <Text style={styles.labelValues}>{horaInicial}</Text>
                        </View>
                        <View style={styles.buttons}>
                            <Button title="Hora final" onPress={showTimePickerFinal} />
                            <DateTimePickerModal
                                isVisible={isTimePickerVisibleFinal}
                                mode="time"
                                onConfirm={confirmarHoraFinal} 
                                onCancel={hideTimePickerFinal}
                                locale='es-ES'
                            />
                            <Text style={styles.labelValues}>{horaFinal}</Text>
                        </View>
                        
                    </View>
                
                <View style={styles.contenedorBotones}>
                <TouchableHighlight onPress={()=> cancelarTarea()} style={styles.botonCancelar}>
                        <Text style={styles.textoGuardar}>Cancelar</Text>        
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=> crearNuevaTarea()} style={styles.botonGuardar}>
                        <Text style={styles.textoGuardar}>Guardar</Text>        
                    </TouchableHighlight>
                </View>

            </View>
        </ScrollView>
      </>)
}
const styles = StyleSheet.create({
    principal:{paddingHorizontal: 10, paddingVertical: 10,},
    label: {
      textAlign: 'left',
      marginTop: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ffffff'
    },
    labelValues:{
        color: '#ffffff', 
        textAlign: 'left',

    },
    buttons:{marginVertical: 10,  borderRadius: 10,},
    imput: {
        backgroundColor: '#ffff',
        borderRadius: 5,
        marginVertical: 10,
    },
    textoGuardar: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff',
        
    },
    botonGuardar: {
        backgroundColor: '#1455D9',
        paddingVertical: 5,
        marginHorizontal: 3,
        width: '40%',
        paddingHorizontal:5,
    },
    botonCancelar: {
      backgroundColor: '#BF1736',
      paddingVertical: 5,
      marginHorizontal: 3,
      width: '40%',
      paddingHorizontal:5,
  },
  contenedorBotones: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
   
  }
  });

export default Formulario;