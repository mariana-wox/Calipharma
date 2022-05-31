import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import { Link } from '@react-navigation/native';
import { Divider } from '@rneui/themed';

const Menu = ({ navigation }) => {
  return (
    <View style={styles1.container}>
    <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' }} style={styles.image}/>
    <Link style={{color: "white", textAlign: "center", fontSize: 10, marginBottom: 10}} to={{ screen: 'Expediente' }}>
      Editar Perfil/Expediente
    </Link>
    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom:20, textAlign:"center"}}> Alan Brito Delgado </Text>
    <View style={styles.container}> 
     <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', paddingTop: 10, paddingBottom: 14 }}> Medicamentos </Text>
    <Link style={styles.link1} to={{ screen: 'MedInv' }}>
      Buscar medicamento
    </Link>
        <Link style={styles.link1} to={{ screen: 'donacion' }}>
      Donar medicamento
    </Link>
        <Link style={styles.link1} to={{ screen: 'BancoMed' }}>
      Banco de medicamentos
    </Link>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', paddingTop: 20, paddingBottom: 14 }}> Farmacias </Text>
    <Link style={styles.link1} to={{ screen: 'FarmaciaScreen' }}>
      Buscar farmacias
    </Link>
    <Divider style={{width:"95%", marginTop: 30}}/>
    <Link style={styles.link2} to={{ screen: 'Inicio' }}>
      Ajustes
    </Link>
    <Link style={styles.link1} to={{ screen: 'Inicio' }}>
      Calificanos!
    </Link>
    <Link style={styles.link1} to={{ screen: 'Ayuda' }}>
      Centro de Ayuda
    </Link>
    <TouchableOpacity style={styles.button1} activeOpacity={0.2} onPress={() => navigation.navigate('Inicio')}>
        <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}> Cerrar Sesión </Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: "#164e63",
  }
});

const styles = StyleSheet.create({
    link1: {
    marginTop: 6,
    alignSelf: "just",
    fontSize: 18,
    color: "white",
    marginLeft: 30
  },
  container: {
    paddingTop: 30,
    backgroundColor: "grey",
    paddingLeft: 30
  },
  link2: {
    marginTop: 20,
    alignSelf: "just",
    fontSize: 18,
    color: "white",
    marginLeft: 30
  },
   button1: {
    alignItems: "center",
    backgroundColor: "#164e63",
    marginTop: 40,
    padding: 8,
    borderRadius: 8,
    width: 200,
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

export default Menu;