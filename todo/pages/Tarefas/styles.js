import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#fff;
  flex:1;
  justify-content:center;
  align-items:center;
  padding:0 20px;
`;

export const Task = styled.Text`
  font-size:20px;
`;

export const FormEnviar = styled.View`
  flex-direction:row;
`;

export const Input = styled.TextInput`
  border:1px solid #333;
  height:60px;
  flex:1;
  border-radius:5px;
  padding:0 20px;
`;

export const Button = styled.TouchableOpacity`
  width:100px;
  background-color:#04d361;
  height:60px;
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-left:10px;

`;

export const TextButton = styled.Text`
  font-size:20px;
`;