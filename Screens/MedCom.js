import * as React from 'react';
import { View, StyleSheet, Image, Text, ScrollView} from "react-native";
import { Avatar, Badge, Icon} from '@rneui/themed';

const MedCom = ({ navigation }) => {
  return (
    <View style={styles1.container}>
    <Image source={{ uri: 'https://facturaclick.com.mx/wp-content/uploads/2021/12/FARMACIAS-GUADALAJARA-FACTURACION-LOGO-1.png' }} style={styles.image}/>
          <Text style={{ color: 'grey', fontSize: 20, fontWeight: 'bold', marginBottom:5, textAlign:"center"}}> Farmacia Guadalajara </Text>
      <Text style={{ color: 'grey', fontSize: 15, marginBottom:5, textAlign:"center"}}> Sucursal Canal Interceptor </Text>
      <Text style={{ color: 'grey', fontSize: 15, marginBottom:10, textAlign:"center"}}> #412, Las Arboledas </Text>
      <View style={styles2.container}>
      <Text style={{ color: '#404040', fontSize: 20, fontWeight: 'bold', paddingTop: 10, paddingBottom: 14, marginLeft: 10 }}> Doctores disponibles </Text>
      <Text style={styles.text}> Dra. Martha Lozano </Text>
      <Text style={styles.text1}> Califiación Promedio </Text>
      <Image source={{ uri: 'https://media.istockphoto.com/vectors/four-rating-stars-icon-for-review-productinternet-website-and-mobile-vector-id1214613059?k=20&m=1214613059&s=170667a&w=0&h=0QxjrkGWMs0ZajZWJHqOjQB4Bgji4u-cW43oUrfAxc4=' }} style={styles.image}/>
      <Text style={{ color: '#404040', fontSize: 20, fontWeight: 'bold', paddingTop: -2, paddingBottom: 2, marginLeft: 10 }}> Reseñas de atención </Text>
      </View>
    <View style={styles.container}> 
          <ScrollView>
        <View style ={{marginLeft: 10}}>
        <Avatar rounded source={{ uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' }}size="medium"/>
        </View>
        <Text style={{marginLeft: 70, marginTop: -32, backgroundColor: "#d4d4d4", fontWeight: "bold", color: "#262626"}}>Alan Brito Delgado</Text>
        <Text style={{marginLeft: 10, marginTop: 18}}>La atención que recibi fue muy rapida, ademas los medicamentes que me receto me hicieron sentir mejor casi de inmediato.</Text>
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Badge status="warning" />
          <Text style={{ color: '#397af8', fontSize: 12, marginLeft: 10, marginTop: -4 }}>Me gusta</Text>
        </View>
        <View style ={{marginTop: 5, marginLeft: 10}}>
        <Avatar rounded source={{ uri: 'https://cdn-icons-png.flaticon.com/512/146/146031.png' }}size="medium"/>
        </View>
        <Text style={{marginLeft: 70, marginTop: -32, backgroundColor: "#d4d4d4", fontWeight: "bold", color: "#262626"}}>Gerardo Paniagua</Text>
        <Text style={{marginLeft: 10, marginTop: 18}}>Excelente servicio.</Text>
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Badge status="warning" />
          <Text style={{ color: '#397af8', fontSize: 12, marginLeft: 10, marginTop: -4 }}>Me gusta</Text>
        </View>
        <View style ={{marginTop: 5, marginLeft: 10}}>
        <Avatar rounded source={{ uri: 'https://icons-for-free.com/download-icon-female+person+user+woman+young+icon-1320196266256009072_512.png' }}size="medium"/>
        </View>
        <Text style={{marginLeft: 70, marginTop: -32, backgroundColor: "#d4d4d4", fontWeight: "bold", color: "#262626"}}>Luz Rojas</Text>
        <Text style={{marginLeft: 10, marginTop: 18}}>La atencion es muy buena, resuleve todas las dudas y hace buenas recomendaciones de salud.</Text>
        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
          <Badge status="warning" />
          <Text style={{ color: '#397af8', fontSize: 12, marginLeft: 10, marginTop: -4 }}>Me gusta</Text>
        </View>
      </ScrollView>
    </View>
    </View>
  );
}


const styles2 = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

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
  text: {
    color: '#075985', 
    fontSize: 18, 
    fontWeight: 'bold', 
    paddingTop: -2, 
    paddingBottom: 14,
    textAlign: "center" 
  },
  text1: {
    fontSize: 15, 
    fontWeight: "bold", 
    color: "grey", 
    textAlign: "center",
    marginTop: -4
  }
});

export default MedCom