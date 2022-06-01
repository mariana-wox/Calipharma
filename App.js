import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InicioScreen from "./Screens/InicioScreen";
import LoginScreen from "./Screens/LoginScreen";
import Registro from "./Screens/Registro";
import InfoScreen from "./Screens/InfoScreen";
import Menu from "./Screens/Menu";
import Expediente from "./Screens/Expediente";
import FarmaciaScreen from "./Screens/FarmaciaScreen";
import FarmCom from "./Screens/FarmCom";
import MedCom from "./Screens/MedCom";
import MedInv from "./Screens/MedInv";
import medicamento from "./Screens/medicamento";
import BancoMed from "./Screens/BancoMed";
import donacion from "./Screens/donacion";
import Ayuda from "./Screens/Ayuda";
import Mapa from "./Screens/Mapa";
import { NativeBaseProvider } from "native-base";



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={InicioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Inciar Sesión",
          }}
        />
        <Stack.Screen
          name="Registro"
          component={Registro}
          options={{
            title: "Registrarse",
          }}
        />
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{
            title: "CaliPharma Community",
          }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: "Perfil",
          }}
        />
        <Stack.Screen
          name="Expediente"
          component={Expediente}
          options={{
            title: "Expediente",
          }}
        />
        <Stack.Screen
          name="FarmaciaScreen"
          component={FarmaciaScreen}
          options={{
            title: "Perfil de Farmacia",
          }}
        />
        <Stack.Screen
          name="FarmCom"
          component={FarmCom}
          options={{
            title: "Comentarios",
          }}
        />
        <Stack.Screen
          name="MedCom"
          component={MedCom}
          options={{
            title: "Comentarios",
          }}
        />
        <Stack.Screen
          name="MedInv"
          component={MedInv}
          options={{
            title: "Medicamentos Disponibles",
          }}
        />
        <Stack.Screen
          name="medicamento"
          component={medicamento}
          options={{
            title: "Información del Medicamento",
          }}
        />
        <Stack.Screen
          name="BancoMed"
          component={BancoMed}
          options={{
            title: "Bancos de Medicamento",
          }}
        />
        <Stack.Screen
          name="donacion"
          component={donacion}
          options={{
            title: "Donación de Medicamento",
          }}
        />
        <Stack.Screen
          name="Ayuda"
          component={Ayuda}
          options={{
            title: "Centro de Ayuda",
          }}
        />
        <Stack.Screen
          name="Mapa"
          component={Mapa}
          options={{
            title: "Mapa Farmacias",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
