import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
};

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form className="form-todo" onSubmit={handleSubmit}>
      <div className="todo-input">
        <label htmlFor="todo">
          Input new item:
          <input
            type="text"
            name="todo"
            className="input"
            placeholder="Add item ..."
            value={value}
            onChange={e => setValue(e.target.value)} />
        </label>
      </div>
      <button className="btn-submit" type="submit">Add item</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
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
      <h2>Simple todo-list</h2>
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
