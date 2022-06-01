import React, { useReducer } from 'react';

import firebase from '../../firebase';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import { OBTENER_PRODUCTOS_EXITO } from '../../types';
import _ from 'lodash';

const FirebaseState = props => {

    // Crear state inicial
    const initialState = {
        catalogo: []
    }

    // useReducer con dispatch  para ejecutar las funciones
    const [ state, dispatch ] = useReducer(FirebaseReducer, initialState);

    // Función que se ejecuta para traer los productos
    const obtenerMedicamentos = () => {
  

        // consultar firebase
        firebase.db
            .collection('medicamentos')
            .where('existencia', '==', true) // traer solo los que esten en existencia
            .onSnapshot(manejarSnapshot);

        function manejarSnapshot(snapshot) {
            let medicamentos = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            // Ordenar por categoria con lodash
            medicamentos = _.sortBy(medicamentos, 'categoria');

            // console.log(medicamentos)

            // Tenemos resultados de la base de datos
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: medicamentos
            });
        }
    }


    return (
        <FirebaseContext.Provider
            value={{
                catalogo: state.catalogo,
                firebase,
                obtenerMedicamentos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;