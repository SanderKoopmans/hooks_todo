import React from 'react';

const TodoList = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={index.toString()}>
        <p>{todo}</p>
        <button type="button" onClick={() => { deleteTodo(index); }}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
