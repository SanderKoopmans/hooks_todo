import React, { useState } from 'react';
import { 
  Button,
  Input,
  InputLabel,
} from '@material-ui/core';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={e => {
      e.preventDefault();
      addTodo(value);
      setValue('');
    }}>

      <InputLabel htmlFor="input">
        Add item:
        <Input
          name="input"
          type="text"
          value={value}
          onChange={e => { setValue(e.target.value)}}
          placeholder="Add new item..." 
          inputProps={{ 'aria-label': 'description' }} />
      </InputLabel>
      <Button type="submit" variant="contained" color="primary">Add item</Button>
    </form>
  )
};

export default TodoForm;
