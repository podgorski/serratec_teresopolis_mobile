import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import ComponenteNeto from './ComponenteNeto';

const ComponenteFilho = ({ sobrenome, handleFilho, handleAgrado }) => {
  return (
    <>
      <TouchableOpacity onPress={() => {
        handleFilho('Benção Pai')
      }}>
        <Text>Componente Filho {sobrenome}</Text>
      </TouchableOpacity>

      <ComponenteNeto sobrenome={sobrenome} handleAgrado={handleAgrado} />
    </>
  )
}

export default ComponenteFilho;