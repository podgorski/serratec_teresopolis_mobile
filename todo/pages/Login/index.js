import React from 'react';

import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Input,
  Button,
  ButtonText
} from './styles'

const Login = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Input />
      <Input />
      <Button>
        <ButtonText>Acessar</ButtonText>
      </Button>
    </Container>

  )
}

export default Login;