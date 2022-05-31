import * as React from "react";
import { View, SafeAreaView, StyleSheet, TextInput, Image, Text, TouchableOpacity} from "react-native";

const Registro = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Correo Electrónico");
  const [text1, onChangeText1] = React.useState("Contraseña");
  const [text2, onChangeText2] = React.useState("Fecha de Nacimiento");
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://simg.nicepng.com/png/small/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png' }}
        style={styles.image}
      />
      <Text style={{ color: '#18181b', fontSize: 22, fontWeight: 'bold', paddingTop: 10, paddingBottom: 14 }}> Registro </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText1={onChangeText1}
          value={text1}
        />
        <TextInput
          style={styles.input}
          onChangeText2={onChangeText2}
          value={text2}
        />
      </SafeAreaView>
      <TouchableOpacity style={styles.button1} activeOpacity={0.2} onPress={() => navigation.navigate('Menu')}>
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
    width: 320,
    height: 80,
    marginBottom:18, 
    resizeMode: 'contain'
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

export default Registro;