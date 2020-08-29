import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoForm addTodo={todoText => {
        setTodos([...todos, todoText]);
      }} />
      <TodoList
        todos={todos}
        deleteTodo={todoIndex => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);

          setTodos(newTodos);
        }} />
    </div>
  );
};

export default App;
