import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";


const BancoMed = ({ navigation }) => {
  return (
    <View style={styles1.container}>
      <Image source={{ uri: 'https://fondify-media.s3.amazonaws.com/organizations/logos/2018-03-21/1167673_211006369059833_1960042373_o_5tYUCMr.jpg' }} style={styles.image} />
      <Text style={{ color: 'grey', fontSize: 20, fontWeight: 'bold', marginBottom: 5, textAlign: "center" }}> Fundación Medicina </Text>
      <Text style={{ color: 'grey', fontSize: 15, marginBottom: 5, textAlign: "center" }}> Luis Donaldo Colosio </Text>
      <Text style={{ color: 'grey', fontSize: 15, marginBottom: 10, textAlign: "center" }}> #603, Las Arboledas </Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button1} activeOpacity={0.2} onPress={() => navigation.navigate('donacion')}>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}> Donar medicamento </Text>
        </TouchableOpacity>
        <Text style={{ color: '#44403c', fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}> Horarios </Text>
        <Text style={{ color: '#44403c', fontSize: 16, marginBottom: 30, textAlign: "center" }}> Lunes a Domingo - 8:00 a.m. - 9:30 p.m. </Text>
        <Text style={{ color: '#44403c', fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}> Sitio Web </Text>
        <Text style={{ color: '#44403c', fontSize: 16, marginBottom: 30, textAlign: "center" }}> www.fmedicinasparatodos.com.mx </Text>
        <Text style={{ color: '#44403c', fontSize: 20, fontWeight: 'bold' }}> Imagenes </Text>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: "#d6d3d1",
    marginBottom: 40
  }
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "white",
    paddingLeft: 10
  },
  image: {
    width: "100%",
    height: 80,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#475569",
    marginTop: 4,
    padding: 10,
    borderRadius: 4,
    width: 220,
    alignSelf: "center",
    marginBottom: 18
  },
});

export default BancoMed