import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";


const FarmaciaScreen = ({ navigation }) => {
  return (
    <View style={styles1.container}>
    <Image source={{ uri: 'https://facturaclick.com.mx/wp-content/uploads/2021/12/FARMACIAS-GUADALAJARA-FACTURACION-LOGO-1.png' }} style={styles.image}/>
          <Text style={{ color: 'grey', fontSize: 20, fontWeight: 'bold', marginBottom:5, textAlign:"center"}}> Farmacia Guadalajara </Text>
      <Text style={{ color: 'grey', fontSize: 15, marginBottom:5, textAlign:"center"}}> Sucursal Canal Interceptor </Text>
      <Text style={{ color: 'grey', fontSize: 15, marginBottom:10, textAlign:"center"}}> #412, Las Arboledas </Text>
    <View style={styles.container}> 
    <Text style={{ color: '#44403c', fontSize: 20, fontWeight: 'bold', marginBottom:5}}> Horarios </Text>
    <Text style={{ color: '#44403c', fontSize: 16, marginBottom:30, textAlign: "center"}}> Lunes a Domingo - 8:00 a.m. - 9:30 p.m. </Text>
    <Text style={{ color: '#44403c', fontSize: 20, fontWeight: 'bold', marginBottom:5}}> Sitio Web </Text>
    <Text style={{ color: '#44403c', fontSize: 16, marginBottom:30, textAlign: "center"}}> www.farmaciasguadalajara.com </Text>
    <Text style={{ color: '#44403c', fontSize: 20, fontWeight: 'bold', marginBottom:20}}> Imagenes </Text>
    <Image source={{ uri: 'https://i.pinimg.com/originals/ff/31/2b/ff312b843eee03e1dda71b5486b0606a.jpg' }} style={{ width: "100%", height: 400, resizeMode:'contain', backgroundColor: "white"}} />
        <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "white", flex: 0.5 }}>
        <TouchableOpacity style={styles.button1} activeOpacity={0.2} onPress={() => navigation.navigate('FarmCom')}>
          <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold' }}> Comentarios Farmacia </Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: "white", flex: 0.5 }}>
        <TouchableOpacity style={styles.button1} activeOpacity={0.2} onPress={() => navigation.navigate('MedCom')}>
          <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold' }}> Reseñas Médicos </Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: "white", flex: 0.5 }}>
        <TouchableOpacity style={styles.button1} activeOpacity={0.2} onPress={() => navigation.navigate('MedInv')}>
          <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold' }}> Precios Medicamento </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    marginBottom:5, 
    resizeMode: 'contain',
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#d4d4d4",
    marginTop: 20,
    padding: 8,
    width: 100,
    alignSelf: "center",
    textAlign: "center"
  }
});

export default FarmaciaScreen;