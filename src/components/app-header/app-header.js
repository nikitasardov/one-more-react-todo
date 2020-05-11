import React from 'react';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Easy Todo</h1>
      <div className="flex-column">
        {/*<div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch1" checked="true" />
          <label class="custom-control-label" for="darkSwitch">Dark switch</label>
        </div>*/}
        {(toDo === 0 && done === 0)
          ? 'List is empty now'
          : <span className="badge badge-dark">{toDo} more to do, {done} done</span>}
      </div>
    </div>
  );
};

export default AppHeader;