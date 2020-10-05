import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import {
  Container,
  Task,
  Input,
  Button,
  TextButton,
  FormEnviar
} from './styles'

import api from '../../services/api';

const Tarefas = () => {

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await api.get("tarefas");
    // console.warn(response.data);
    setTasks(response.data)
  }

  const handleAddTasks = () => {

  }

  const handleTasks = () => {

  }

  const handleRemoveTask = () => {

  }

  useEffect(() => {
    loadTasks();
  }, [])



  return (

    <Container>
      <FormEnviar>
        <Input />
        <Button>
          <TextButton>Criar</TextButton>
        </Button>
      </FormEnviar>

      {tasks.map(task => (
        <Task key={task.id}>{task.descricao}</Task>
      )
      )}
    </Container>


  )

}

export default Tarefas;