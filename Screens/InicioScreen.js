import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import { Link } from '@react-navigation/native';

function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/originals/29/c8/4c/29c84c23028cd442494886e83fafe0a9.jpg' }}
        style={{ width: "100%", height: 400, marginBottom:18, resizeMode:'contain' }}
      />
      <TouchableOpacity style={styles.button1} activeOpacity={0.2} onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}> Inciar Sesión </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} activeOpacity={0.2} onPress={() => navigation.navigate('Registro')}>
        <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}> Registrarse </Text>
      </TouchableOpacity>
      <Link style={styles.link1} to={{ screen: 'Info'}}>
      Acerca de...
    </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },

  button1: {
    alignItems: "center",
    backgroundColor: "#475569",
    marginTop: 16,
    padding: 10,
    borderRadius: 4,
    width: 260,
    alignSelf: "center"
  },

  link1: {
    marginTop: 70,
    alignSelf: "center"
  }
});

export default InicioScreen;