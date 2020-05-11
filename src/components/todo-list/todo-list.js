import React from 'react';
import TodoListItem from '../todo-list-item';

const TodoList = ({todos, onToggleProp, onDeleted, filters}) => {
  const els = todos.map((item) => {
    const {id, ...itemProps} = item;
    const el = (
      <li className="list-group-item" key={id}>
        <TodoListItem
          {...itemProps}
          onToggleDone={() => onToggleProp(id, 'done')}
          onToggleImportant={() => onToggleProp(id, 'important')}
          onDeleted={() => onDeleted(id)} />
      </li>
    );

    const searchMatches = itemProps.label.toLowerCase().indexOf(filters.label) !== -1;
    
    switch(true) {
      case (filters.status === 'all' && searchMatches):
        return el;
      case (filters.status === 'active' && !itemProps.done && searchMatches):
        return el;
      case (filters.status === 'done' && itemProps.done && searchMatches):
        return el;
      default:
        return '';
    }
  });

  return (
    <ul className="list-group todo-list">
      {els}
    </ul>
  );
};

export default TodoList;