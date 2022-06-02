import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { Input, CheckBox } from '@rneui/themed';

const donacion = ({ navigation }) => {
  const [nombre, setNombre] = useState(false);
  const [ingrediente, setIngrediente] = useState(false);
  const [cantidad, setCantidad] = useState(false);
  const [fecha, setFecha] = useState(false);
  const [presentacion, setPresentacion] = useState(false);
  const [check1, setCheck1] = useState(false);


  return (
    <View style={styles.container}>
    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, textAlign: "center" }}> Donando a </Text>
    <Text style={{ color: 'black', fontSize: 17, paddingBottom: 10, textAlign: "center" }}> Fundación Medicina para Todos </Text>
    <Input onChangeText={(text) => setNombre(text)} style={{marginTop:10, fontSize: 15}} placeholder='Nombre'/>
    <Input onChangeText={(text) => setIngrediente(text)} style={{fontSize: 15}} placeholder='Ingrediente Activo'/>
    <Input onChangeText={(text) => setCantidad(text)} style={{fontSize: 15}} placeholder='Cantidad por caja/envase'/>
    <Input  onChangeText={(text) => setFecha(text)} style={{fontSize: 15}} placeholder='Fecha de caducidad'/>
    <Input onChangeText={(text) => setPresentacion(text)} style={{fontSize: 15}} placeholder='Presentación'/>
    <CheckBox
      checkedColor="black"
      size={25}
      title="La caja se encuentra sellada"
      checked={check1}
      onPress={() => setCheck1(!check1)}
    />
    <TouchableOpacity style={styles.button2} activeOpacity={0.2} onPress={() => navigation.navigate('Menu')}>
        <Text style={{ color: 'white', fontSize: 13}}> Enviar </Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 30,
    marginRight: 30,
    marginBottom: 20
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#164e63",
    marginTop: 10,
    padding: 8,
    borderRadius: 8,
    width: "90%",
    alignSelf: "center"
  },
});

export default donacion;