import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
    {props.todos.map((todo, index) => {
      {/* return(<li key={todo.title}>
        <input type="checkbox" name="" id=""/>{todo.title}
      </li>) */}
      return (<TodoItem
        key={index}
        todo={todo}
        toggleDone={props.toggleDone}
        removeTodo={props.removeTodo}
      />)
    })}
  </ul>
  );
};

export default TodoList;
