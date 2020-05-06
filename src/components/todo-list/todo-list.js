import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({todos}) => {
  const els = todos.map((item) => {
    const {id, ...restProps} = item;
    
    return <li className="list-group-item" key={id}>
        <TodoListItem {...restProps} />
      </li>;
  });

  return (
    <ul className="list-group todo-list">
      {els}
    </ul>
  );
};

export default TodoList;