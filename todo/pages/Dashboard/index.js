import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles'

import ProgressCircle from 'react-native-progress-circle'

const Dashboard = () => {
  return (
    <Container>
      <ProgressCircle
        percent={30}
        radius={100}
        borderWidth={30}
        color="tomato"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={{ fontSize: 25 }}>{'80%'}</Text>
      </ProgressCircle>
    </Container>


  )
};

export default Dashboard;