import React from 'react';

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'

const App = () => {
  const todoData = [
    {label: 'Learn React', important: false, id: 1},
    {label: 'Build awsome App', important: false, id: 2},
    {label: 'Study Laravel', important: true, id: 3},
    {label: 'Get great Job', important: true, id: 4}
  ];
  return (
    <div className="app">
      <AppHeader />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      
      <TodoList todos={todoData}/>
    </div>
  );
};

export default App;