import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ComponenteNeto = ({ sobrenome, handleAgrado }) => {
  return (
    <TouchableOpacity onPress={() => {
      handleAgrado(30);
    }}>
      <Text>Componente Neto {sobrenome}</Text>
    </TouchableOpacity>

  )
}

export default ComponenteNeto;