import React, { useState } from 'react';
import './App.css';

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)} />
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'First todo' },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
