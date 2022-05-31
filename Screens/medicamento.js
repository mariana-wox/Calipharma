import * as React from 'react';
import { View, StyleSheet, Image, Text } from "react-native";
import { Divider } from '@rneui/themed';

const medicamento = ({ navigation }) => {
  return (
    <View style={styles1.container}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
          }}
        >
          <View style={{ backgroundColor: "white", flex: 0.4 }}>
            <Image source={{ uri: 'https://www.soriana.com/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwd8ff57e7/images/product/7500525297761_A.jpg' }} style={styles.image} />
            <Text style={styles.text2}> $500 MXN </Text>
            <Divider style={{ width: "95%", marginTop: 10 }} />
            <Text style={styles.text3}> Ingrediente activo: </Text>
            <Text style={styles.text3}> Vía de administración </Text>
            <Text style={styles.text3}> Dosis habitual: </Text>
            <Text style={styles.text3}> Efectos Secundarios: </Text>
            <Text style={styles.text4}> Precauciones: </Text>
          </View>

          <View style={{ backgroundColor: "white", flex: 0.5 }}>
            <Text style={styles.text1}> Metamizol sódico </Text>
            <Text style={{ color: '#44403c', fontSize: 12, marginBottom: 5, textAlign: "center" }}> en Farmacia Guadalajara </Text>
            <Divider style={{ width: "95%", marginTop: 73 }} />
            <Text style={{ color: '#44403c', fontSize: 14, marginTop: 22, textAlign: "just", marginLeft: 15 }}>Metamizol sódico </Text>
            <Text style={{ color: '#44403c', fontSize: 14, marginTop: 50, textAlign: "just", marginLeft: 15 }}>Oral </Text>
            <Text style={{ color: '#44403c', fontSize: 14, marginTop: 36, textAlign: "just", marginLeft: 15 }}>10 a 100mg al día </Text>
            <Text style={{ color: '#44403c', fontSize: 14, marginTop: 30, textAlign: "just", marginLeft: 15 }}>Cefalea, mareo, insomnio, náuseas, diarrea, exantema, angiodema y agranulocitosis </Text>
            <Text style={{ color: '#44403c', fontSize: 14, marginTop: 30, textAlign: "just", marginLeft: 15 }}>En pacientes con daño renal, diabetes, insuficiencia cárdiaca y enfermedad vascular. </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: "white",
    marginBottom: 40
  }
});

const styles = StyleSheet.create({
  container: {
    paddingTop: -2,
    backgroundColor: "white",
    paddingLeft: 10
  },
  image: {
    width: "100%",
    height: 80,
    marginBottom: 5,
    resizeMode: 'contain',
    marginTop: 15
  },
  text1: {
    color: '#075985',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 18,
    paddingBottom: 8,
    textAlign: "center"
  },
  text2: {
    color: '#black',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 2,
    paddingBottom: 8,
    textAlign: "center"
  },
  text3: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 18,
    paddingBottom: 8,
    marginLeft: 5,
    textAlign: "center"
  },
  text4: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 85,
    paddingBottom: 8,
    marginLeft: 5,
    textAlign: "center"
  },
});

export default medicamento