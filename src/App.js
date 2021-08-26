import { useEffect, useState } from 'react';
import './App.css';

import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import TodoFooter from "./components/TodoFooter"


function App() {
  const [todos, setTodos] = useState([
    {
      text: "Wake Up",
      id: Math.random(),
      isCompleted: false,
    },
    {
      text: "Take Shower",
      id: Math.random(),
      isCompleted: false,
    },
    {
      text: "Breakfast",
      id: Math.random(),
      isCompleted: false,
    },
  ])


  const handleOnAdd = text => {
    if (text) {
      setTodos(prevtodos => [
        ...prevtodos,
        {
          text,
          id: Math.random(),
          isCompleted: false,
        },
      ])
    }
  }

  const handleOnDelTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleOnCheckedTodo = newTodo => {
    setTodos(todos.map(todo => {
      if (todo.id === newTodo.id){
        return newTodo
      }
      return todo;
    }))
  }

  const handleOnDelCompleted = () => {
    setTodos(todos.filter(todo => todo.isCompleted === false))
  } 

  return (
    <div className="App">
      Hello Armenia
      <TodoForm onAdd={handleOnAdd} />
      <TodoList onCheckedTodo={handleOnCheckedTodo} onDelTodo={handleOnDelTodo} todos={todos} />
      <TodoFooter todos={todos} onDelCompleted={handleOnDelCompleted}/>
    </div>
  );
}

export default App;
