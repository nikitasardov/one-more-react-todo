import React from 'react';

const TodoListItem = (params) => {

  const {label, done, important, onToggleDone, onDeleted, onToggleImportant} = params;

  let classes = 'todo-list-item text-info';
  classes += (done) ? ' done' : '';
  classes += (important) ? ' important' : '';

  return (
    <span className={classes}>
      <span
        className="todo-list-item-label"
        title={(done) ? '' : 'Mark as done'}
        onClick={onToggleDone}>
        {label}
      </span>

      <button type="button"
              onClick={onDeleted}
              title="Remove task"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>

      <button type="button"
              onClick={onToggleImportant}
              title={(important) ? 'Not important' : 'Mark as important'}
              className="btn btn-outline-warning btn-sm float-right">
      <i className="fa fa-exclamation" />
    </button>
    </span>
  );
}

export default TodoListItem;