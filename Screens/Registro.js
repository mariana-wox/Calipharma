import * as React from "react";
import { View, SafeAreaView, StyleSheet, TextInput, Image, Text, TouchableOpacity, DatePickerIOSBase} from "react-native";

import {FirebaseContext} from '../firebase';

const Registro = ({ navigation }) => {
  
  const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
        fecha_nac: ''
    }, 
    validationSchema: Yup.object({
        email: Yup.email()
                    .required('El correo es obligatorio'),
        password: Yup.password()
                    .required('La contraseña es requerida'),
        fecha_nac: 
                    Yup.required('La Fecha de nacimiento es obligatoria'),

                    
    }),
    onSubmit: medicamento => {
        console.log(medicamento)
        try {
            medicamento.existencia = true;
            medicamento.imagen = urlimagen;

            firebase.db.collection('medicinas').add(medicamento);
            
            /* Redireccionar
            navigate('/Catalogo');*/

        } catch (error) {
            console.log(error);
        }
    }
});


  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://simg.nicepng.com/png/small/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png' }}
        style={styles.image}
      />
      <Form onSubmit={formik.handleSubmit}>
      <Text style={{ color: '#18181b', fontSize: 22, fontWeight: 'bold', paddingTop: 10, paddingBottom: 14 }}> Registro </Text>
      <SafeAreaView>
      <div className="mb-4">
        <label>Email</label>
        <TextInput 
        id="email"
        type="email"
        placeholder="Correo Electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
          />
      </div>
      { formik.touched.email && formik.errors.email ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Error en el correo</p>
                                <p>{formik.errors.email} </p>
                            </div>
                        ) : null }

      <div className="mb-4">
        <label>password</label>
        <TextInput 
        id="password"
        type="password"
        placeholder="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
          />
      </div>

      { formik.touched.password && formik.errors.password ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Contraseña</p>
                                <p>{formik.errors.password} </p>
                            </div>
                        ) : null }
                        <div className="mb-4">
        <label>email</label>
        <TextInput 
        id="email"
        type="email"
        placeholder="Correo Electronico"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
          />
      </div>

      { formik.touched.email && formik.errors.email ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Contraseña</p>
                                <p>{formik.errors.email} </p>
                            </div>
                        ) : null }


      </SafeAreaView>
      </Form>
      <TouchableOpacity style={styles.button1}  type="submit" activeOpacity={0.2} onPress={() => navigation.navigate('Menu')}>
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