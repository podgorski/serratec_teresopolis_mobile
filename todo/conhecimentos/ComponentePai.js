import React, { useState } from 'react';
import { Text } from 'react-native';

import ComponenteFilho from './ComponenteFilho';

const ComponentePai = ({ sobrenome }) => {

  const [mensagem, setMensagem] = useState("");

  const handleFilho = (mensagem) => {
    setMensagem(mensagem)
  }

  const handleAgrado = (valor) => {
    const valor_novo = valor + Math.floor(Math.random() * 100) + 1
    setMensagem(`toma os ${valor_novo} reais`)
  }

  return (
    <>
      <Text>Componente Pai {sobrenome} {mensagem}</Text>
      <ComponenteFilho
        sobrenome={sobrenome}
        handleFilho={handleFilho}
        handleAgrado={handleAgrado}
      />
    </>
  )
}

export default ComponentePai;