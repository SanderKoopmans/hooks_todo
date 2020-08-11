import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    id: 0,
    item: 'Practise using hooks',
  });

  const handleChange = value => {
    console.log('value in change', value);
    setState({ ...state, id: state.length++, item: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('onSubmit fired', state);
  };

  return (
    <div className="App">
      <h1>Hooks todo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo-add">
          Add new todo item
          <input
            id="todo-add"
            name="todo-add"
            placeholder="Add something"
            onChange={(event) => handleChange(event.target.value)} />
        </label>
        <button type="submit">Add item</button>
      </form>
      <h3>PLaceholder for list items</h3>
    </div>
  );
}

export default App;
