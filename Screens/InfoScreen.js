import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider, Image, Avatar } from "native-base";

const Info = () => {
  return <Center w="100%">
    <Box safeArea p="2" w="90%" maxW="290">
      <VStack alignItems="center">
        <Image w="1211" h="90" source={{
          uri: "https://i.pinimg.com/originals/29/c8/4c/29c84c23028cd442494886e83fafe0a9.jpg"
        }} alt="image" />
      </VStack>
    </Box>
    <Box safeArea p="2" w="95%" maxW="290">
      <VStack alignItems="center">
        <Text mt="8" fontSize="md" maxW="300" w="100%">CaliPharma Community es un círculo de ayuda para las personas que deseen saber sobre sus farmacias más cercanas  mediante un mapa, así como dar y ver  las opiniones respecto a los Doctores y  los Medicamentos.</Text>
        <Text mt="2" fontSize="md" maxW="300" w="100%">Del mismo modo, se encontrarán  ubicaciones donde puedan ir a donar el  medicamento, o por el contrario, ir por él  en caso de que lo necesiten. </Text>
      </VStack>
    </Box>
  </Center>;
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Info />
      </Center>
    </NativeBaseProvider>
  );
};