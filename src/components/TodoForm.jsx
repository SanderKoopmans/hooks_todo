import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      addTodo(value);
      setValue('');
    }}>

      <label htmlFor="input">
        Add new item:
        <input
          name="input"
          type="text"
          value={value}
          onChange={e => { setValue(e.target.value)}}
          placeholder="Add new item..." />
      </label>
      <button type="submit">Add item</button>
    </form>
  )
};

export default TodoForm;
