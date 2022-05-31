import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import { Link } from '@react-navigation/native';
import { Divider, Input, CheckBox } from '@rneui/themed';

const Ayuda = ({ navigation }) => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  return (
    <View style={styles.container}>
    <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' }} style={styles.image}/>
    <Text style={{ color: 'grey', fontSize: 20, fontWeight: 'bold', marginBottom:40, textAlign:"center"}}> Alan Brito Delgado </Text>
    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginBottom:20, textAlign:"center"}}> Redes Sociales - Calipharma Community </Text>
    <TouchableOpacity style={styles.button2} activeOpacity={0.2} onPress={() => navigation.navigate('Menu')}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: "bold"}}>Correo Electrónico </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button3} activeOpacity={0.2} onPress={() => navigation.navigate('Menu')}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: "bold"}}> Whatsapp </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button4} activeOpacity={0.2} onPress={() => navigation.navigate('Menu')}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: "bold"}}> Facebook </Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 30,
    marginRight: 30,
    marginBottom: 20
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#ef4444",
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    width: "90%",
    alignSelf: "center"
  },
  button3: {
    alignItems: "center",
    backgroundColor: "#22c55e",
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    width: "90%",
    alignSelf: "center"
  },
  button4: {
    alignItems: "center",
    backgroundColor: "#1e40af",
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
    width: "90%",
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

export default Ayuda;