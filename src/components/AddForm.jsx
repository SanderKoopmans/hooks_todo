import React from 'react';

const AddForm = () => {
  return (
    <form>
      <label htmlFor="todo-add">
        Add new todo item
        <input
          id="todo-add"
          name="todo-add"
          placeholder="Add something" />
      </label>
      <button type="submit">Add item</button>
    </form>
  );
};

export default AddForm;
