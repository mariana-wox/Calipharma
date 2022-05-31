import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import { Link } from '@react-navigation/native';
import { Divider, Input, CheckBox } from '@rneui/themed';

const Expediente = ({ navigation }) => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  return (
    <View style={styles.container}>
    <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' }} style={styles.image}/>
    <Link style={{color: "black", textAlign: "center", fontSize: 10, marginBottom: 10}} to={{ screen: 'Expediente' }}>
      Cambiar foto
    </Link>
    <Input style={{marginTop:10, fontSize: 15}} placeholder='Nombre'/>
    <Input style={{fontSize: 15}} placeholder='Apellido'/>
    <Input style={{fontSize: 15}} placeholder='Tipo de Sangre'/>
    <Input style={{fontSize: 15}} placeholder='Sexo'/>
    <Input style={{fontSize: 15}} placeholder='Teléfono'/>
    <Input style={{fontSize: 15}} placeholder='Dirección'/>
     <Text style={{ color: 'grey', fontSize: 20, fontWeight: 'bold', paddingTop: 15 }}> Credencial de Elector </Text>
     <TouchableOpacity style={styles.button1} activeOpacity={0.2} onPress={() => navigation.navigate('Expediente')}>
        <Text style={{ color: 'white', fontSize: 13}}> Añadir </Text>
    </TouchableOpacity>
    <Text style={{ color: 'grey', fontSize: 17, paddingTop: 20, textAlign: "center" }}> Contacto de confianza </Text>
    <Divider style={{width:"100%", marginTop: 6}}/>
    <Input style={{marginTop:10, fontSize: 15}} placeholder='Nombre'/>
    <Input style={{fontSize: 15}} placeholder='Teléfono'/>
    <Text style={{ color: 'grey', fontSize: 17, paddingTop: 20, textAlign: "center" }}> Alergias </Text>
    <Divider style={{width:"100%", marginTop: 6}}/>
    <Input style={{marginTop:10, fontSize: 15}} placeholder='Medicamentos'/>
    <Input style={{fontSize: 15}} placeholder='Alimentos'/>
    <Text style={{ color: 'grey', fontSize: 17, paddingTop: 20, textAlign: "center" }}> Opciones adicionales </Text>
    <Divider style={{width:"100%", marginTop: 6}}/>
    <CheckBox
      checkedColor="black"
      size={25}
      title="Resumen en pantalla de bloqueo"
      checked={check1}
      onPress={() => setCheck1(!check1)}
    />
    <CheckBox
      checkedColor="black"
      size={25}
      title="Soy donador de órganos"
      checked={check2}
      onPress={() => setCheck2(!check2)}
    />
    <TouchableOpacity style={styles.button2} activeOpacity={0.2} onPress={() => navigation.navigate('Menu')}>
        <Text style={{ color: 'white', fontSize: 13}}> Guardar </Text>
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
   button1: {
    alignItems: "center",
    backgroundColor: "#164e63",
    marginTop: 10,
    padding: 5,
    borderRadius: 8,
    width: 100,
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
  image: {
    flex: 1,
    width: "100%",
    height: 80,
    marginBottom:5, 
    resizeMode: 'contain',
  },
});

export default Expediente