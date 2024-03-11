/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, StyleSheet
} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';


function App() {
  const [tasks, setTasks] = React.useState([
    'Do laundry',
     'Go to gym',
     'Walk dog'
    ]);
  
    const handleAddTask = (task) => {
      setTasks([...tasks, task]);

      //tasks.push(task); returns number not not new array
      //setTasks(tasks);

      //setTasks((prev) => [...prev, task]);

      //setTasks(tasks.concat(task)); does return new array
    };
  
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={handleAddTask}/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({});

export default App;
