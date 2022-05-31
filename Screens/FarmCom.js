import * as React from 'react';
import { View, StyleSheet, Image, Text, ScrollView} from "react-native";
import { Avatar, Badge} from '@rneui/themed';

const FarmCom = ({ navigation }) => {
  return (
    <View style={styles1.container}>
    <Image source={{ uri: 'https://facturaclick.com.mx/wp-content/uploads/2021/12/FARMACIAS-GUADALAJARA-FACTURACION-LOGO-1.png' }} style={styles.image}/>
          <Text style={{ color: 'grey', fontSize: 20, fontWeight: 'bold', marginBottom:5, textAlign:"center"}}> Farmacia Guadalajara </Text>
      <Text style={{ color: 'grey', fontSize: 15, marginBottom:5, textAlign:"center"}}> Sucursal Canal Interceptor </Text>
      <Text style={{ color: 'grey', fontSize: 15, marginBottom:10, textAlign:"center"}}> #412, Las Arboledas </Text>
    <View style={styles.container}> 
          <ScrollView>
        <View style ={{marginLeft: 10}}>
        <Avatar rounded source={{ uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' }}size="medium"/>
        </View>
        <Text style={{marginLeft: 70, marginTop: -32, backgroundColor: "#d4d4d4", fontWeight: "bold", color: "#262626"}}>Alan Brito Delgado</Text>
        <Text style={{marginLeft: 10, marginTop: 18}}>La atencion es muy buena pero los precios faltan por mejorar, ademas creo que seria buena idea que incluyan un doctor ya que al ser la unica farmacia mas cercana se requiere de atencion rápida.</Text>
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Badge status="warning" />
          <Text style={{ color: '#397af8', fontSize: 12, marginLeft: 10, marginTop: -4 }}>Me gusta</Text>
        </View>
        <View style ={{marginTop: 5, marginLeft: 10}}>
        <Avatar rounded source={{ uri: 'https://cdn-icons-png.flaticon.com/512/146/146031.png' }}size="medium"/>
        </View>
        <Text style={{marginLeft: 70, marginTop: -32, backgroundColor: "#d4d4d4", fontWeight: "bold", color: "#262626"}}>Gerardo Paniagua</Text>
        <Text style={{marginLeft: 10, marginTop: 18}}>La atencion no es para nada buena, creo yo que al tratarse  de medicamentos deberian mejorar un poco la limpieza, ademas el horario de atencion es inaccesible.</Text>
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Badge status="warning" />
          <Text style={{ color: '#397af8', fontSize: 12, marginLeft: 10, marginTop: -4 }}>Me gusta</Text>
        </View>
        <View style ={{marginTop: 5, marginLeft: 10}}>
        <Avatar rounded source={{ uri: 'https://icons-for-free.com/download-icon-female+person+user+woman+young+icon-1320196266256009072_512.png' }}size="medium"/>
        </View>
        <Text style={{marginLeft: 70, marginTop: -32, backgroundColor: "#d4d4d4", fontWeight: "bold", color: "#262626"}}>Luz Rojas</Text>
        <Text style={{marginLeft: 10, marginTop: 18}}>La atencion no es para nada buena, creo yo que al tratarse  de medicamentos deberian mejorar un poco la limpieza, ademas el horario de atencion es inaccesible.</Text>
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Badge status="warning" />
          <Text style={{ color: '#397af8', fontSize: 12, marginLeft: 10, marginTop: -4 }}>Me gusta</Text>
        </View>
      </ScrollView>
    </View>
    <View style={{marginTop: 30, backgroundColor: "white"}}>
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
  }
});

export default FarmCom;