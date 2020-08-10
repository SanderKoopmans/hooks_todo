import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    id: 0,
    item: 'Practise using hooks',
  });

  const onSubmit = event => {
    event.preventDefault();
    console.log('onSubmit fired');
  };

  return (
    <div className="App">
      <h1>Hooks todo</h1>
      <form>
        <label htmlFor="todo-add">
          Add new todo item
          <input
            id="todo-add"
            name="todo-add"
            placeholder="Add something" />
        </label>
        <button type="submit" onClick={onSubmit}>Add item</button>
      </form>
      <h3>PLaceholder for list items</h3>
    </div>
  );
}

export default App;
