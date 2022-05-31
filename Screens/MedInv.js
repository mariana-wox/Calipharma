import * as React from 'react';
import { View, StyleSheet, Image, Text } from "react-native";
import { Link } from '@react-navigation/native';

const MedInv = ({ navigation }) => {
  return (
    <View style={styles1.container}>
      <Image source={{ uri: 'https://facturaclick.com.mx/wp-content/uploads/2021/12/FARMACIAS-GUADALAJARA-FACTURACION-LOGO-1.png' }} style={styles.image1} />
      <Text style={{ color: 'grey', fontSize: 20, fontWeight: 'bold', marginBottom: 5, textAlign: "center" }}> Farmacia Guadalajara </Text>
      <Text style={{ color: 'grey', fontSize: 15, marginBottom: 5, textAlign: "center" }}> Sucursal Canal Interceptor </Text>
      <Text style={{ color: 'grey', fontSize: 15, marginBottom: 10, textAlign: "center" }}> #412, Las Arboledas </Text>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
          }}
        >
          <View style={{ backgroundColor: "white", flex: 0.5 }}>
            <Image source={{ uri: 'https://officemax.vteximg.com.br/arquivos/ids/194937-720-720/107475_1.jpg?v=637243309809730000' }} style={styles.image} />
            <Link style={styles.link1} to={{ screen: 'FarmaciaScreen' }}>
              Paracetamol
    </Link>
            <Text style={{ color: '#44403c', fontSize: 16, marginBottom: 5, textAlign: "center" }}> Tabletas 1gr </Text>
            <Text style={{ color: '#44403c', fontSize: 16, marginBottom: 5, textAlign: "center" }}>5 Uds. disponibles </Text>
            <Text style={styles.text1}> $120 MXN </Text>
            <Image source={{ uri: 'https://bspharma.net/wp-content/uploads/2019/11/SENOSIDOS-A-Y-B-PROGELA.jpg' }} style={styles.image} />
            <Link style={styles.link1} to={{ screen: 'FarmaciaScreen' }}>
              Senósidos A y B
    </Link>
            <Text style={{ color: '#44403c', fontSize: 16, marginBottom: 5, textAlign: "center" }}> Tabletas 500mg </Text>
            <Text style={{ color: '#44403c', fontSize: 16, marginBottom: 5, textAlign: "center" }}>5 Uds. disponibles </Text>
            <Text style={styles.text1}> $20 MXN </Text>
          </View>
          <View style={{ backgroundColor: "white", flex: 0.5 }}>
            <Image source={{ uri: 'https://www.soriana.com/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwd8ff57e7/images/product/7500525297761_A.jpg' }} style={styles.image} />
            <Link style={styles.link1} to={{ screen: 'medicamento' }}>
              Metamizol sódico
    </Link>
            <Text style={{ color: '#44403c', fontSize: 16, marginBottom: 5, textAlign: "center" }}> Tabletas 500mg </Text>
            <Text style={{ color: '#44403c', fontSize: 16, marginBottom: 5, textAlign: "center" }}>8 Uds. disponibles </Text>
            <Text style={styles.text1}> $500 MXN </Text>
            <Image source={{ uri: 'https://quefarmacia.com/wp-content/uploads/2017/04/7503006569401_1.jpg' }} style={styles.image} />
            <Link style={styles.link1} to={{ screen: 'FarmaciaScreen' }}>
              Metronidazol
    </Link>
            <Text style={{ color: '#44403c', fontSize: 16, marginBottom: 5, textAlign: "center" }}> Tabletas 500mg </Text>
            <Text style={{ color: '#44403c', fontSize: 16, marginBottom: 5, textAlign: "center" }}>8 Uds. disponibles </Text>
            <Text style={styles.text1}> $50 MXN </Text>
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
    paddingTop: -2,
    backgroundColor: "white",
    paddingLeft: 10
  },
  image1: {
    width: "100%",
    height: 80,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  image: {
    width: "100%",
    height: 80,
    marginBottom: 5,
    resizeMode: 'contain',
    marginTop: 15
  },
  text1: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: -2,
    paddingBottom: 14,
    textAlign: "center"
  },
  link1: {
    paddingTop: -2,
    fontSize: 15,
    color: "#075985",
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 14
  },
});

export default MedInv