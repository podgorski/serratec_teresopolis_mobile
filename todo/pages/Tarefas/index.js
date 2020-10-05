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
  const [newTask, setNewTask] = useState("");

  const loadTasks = async () => {
    try {
      const response = await api.get("tarefas");
      // console.warn(response.data);
      setTasks(response.data)
    } catch (err) {
      console.warn("Falha ao recuperar as tarefas.")
    }

  }

  const handleAddTasks = async () => {

    const params = {
      descricao: newTask,
      concluido: false
    }

    try {
      await api.post("tarefas", params);
      setNewTask("");
      loadTasks();
    } catch (err) {
      console.warn("erro ao salvar a tarefa")
    }

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
        <Input
          placeholder="Digite a tarefa ..."
          onChangeText={(letras) => { setNewTask(letras) }}
          value={newTask}
        />
        <Button onPress={handleAddTasks}>
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