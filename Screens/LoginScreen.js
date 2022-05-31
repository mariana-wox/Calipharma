import * as React from "react";
import { View, SafeAreaView, StyleSheet, TextInput, Image, Text, TouchableOpacity} from "react-native";
import { Link } from '@react-navigation/native';
//import { KeyboardAvoidingView } from "native-base";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("Correo Electrónico");
  const [password, setPassword] = React.useState("Contraseña");
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://simg.nicepng.com/png/small/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png' }}
        style={styles.image}
      />
      <Text style={{ color: '#18181b', fontSize: 22, fontWeight: 'bold', paddingTop: 10, paddingBottom: 14 }}> Inciar Sesión </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
      </SafeAreaView>
      <Link style={styles.link1} to={{ screen: 'Inicio' }}>
        ¿Olvidaste tu contraseña?
    </Link>
          <TouchableOpacity style={styles.button1}
        activeOpacity={0.2}
        onPress={() => navigation.navigate('Menu')}>
        <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}> Aceptar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 16
  },
  container: {
    paddingTop: 30,
  },
  image: {
    flex: 1,
    width: "100%",
    height: 80,
    marginBottom:18, 
    resizeMode: 'contain'
  },
    link1: {
    marginTop: 0,
    alignSelf: "center"
  },
    button1: {
    alignItems: "center",
    backgroundColor: "#115e59",
    marginTop: 40,
    padding: 10,
    borderRadius: 4,
    width: 150,
    alignSelf: "center"
  },
});

export default Login