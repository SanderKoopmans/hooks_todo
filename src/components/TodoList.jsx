import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    width: '85%',
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList = ({ todos, deleteTodo }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {todos.map((todo, index) => (
        <ListItem key={index.toString()}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple />
          </ListItemIcon>
          <ListItemText>{todo}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon type="button" onClick={() => { deleteTodo(index); }} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
};

export default TodoList;
