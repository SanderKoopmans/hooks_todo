import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button,
  Input,
  InputLabel,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '60%',
    padding: '1%',
    margin: '0 auto',
  },
}));

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const classes = useStyles();

  return (
    <form 
      className={classes.root}
      onSubmit={e => {
      e.preventDefault();
      addTodo(value);
      setValue('');
    }}>

      <InputLabel htmlFor="input">
        <Input
          name="input"
          type="text"
          value={value}
          onChange={e => { setValue(e.target.value)}}
          placeholder="Add new item..." 
          inputProps={{ 'aria-label': 'description' }} />
      </InputLabel>
      <br />
      <Button type="submit" variant="contained" color="primary">Add item</Button>
    </form>
  )
};

export default TodoForm;
