import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Task,
  TaskContainer,
  TaskActions,
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

  const handleTasks = async (task) => {

    const params = {
      ...task,
      concluido: !task.concluido
    }

    try {
      await api.put(`tarefas/${task.id}`, params);
      loadTasks();
    } catch (err) {

    }
  }

  const handleRemoveTask = async ({ id }) => {

    try {
      await api.delete(`tarefas/${id}`);
      loadTasks();
    } catch (err) {
      console.warn("erro ao deletar tarefa")
    }
    // console.warn(`delete ${id}`)
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
        <TaskContainer key={task.id} finalizado={task.concluido}>
          <Task >
            <Text>{task.descricao}</Text>
          </Task>
          <TaskActions>

            <MaterialCommunityIcons
              name="delete-outline"
              color="#333"
              size={32}
              onPress={() => { handleRemoveTask(task) }}
            />

            <MaterialCommunityIcons
              name={task.concluido ? "check-circle-outline" : "circle-outline"}
              color={task.concluido ? "#04d361" : "#333"}
              size={32}
              onPress={() => { handleTasks(task) }}
            />



          </TaskActions>
        </TaskContainer>

      )
      )}
    </Container>


  )

}

export default Tarefas;