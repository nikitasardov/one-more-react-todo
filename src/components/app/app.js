import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import AddItem from '../add-item';

export default class App extends Component {
  constructor() {
    super();

    const appData = JSON.parse(localStorage.getItem('appData'));

    const defaultState = (appData)
      ? appData
      : {
        filters: {
          label: '',
          status: 'all'
        },
        todoData: [
          {label: 'Learn React', done: false, important: true, id: 1},
          {label: 'Build awsome App', done: false, important: false, id: 2},
          {label: 'Build neural network', done: false, important: true, id: 3},
          {label: 'Drink Coffee', done: false, important: false, id: 4},
          {label: 'Take a look at bootstrap', done: false, important: false, id: 5}
        ]
      };
      this.state = defaultState;
    };

  saveData = () => {
    return localStorage.setItem('appData', JSON.stringify(this.state));
  }

  isFreeID = (id) => {
    let isFree = true;
    this.state.todoData.forEach((el) => {
      if (el.id === id) {
        isFree = false;
      }
    });
    return isFree;
  }

  getFreeID = () => {
    let suggest = this.state.todoData.length + 1;
    while (!this.isFreeID(suggest)) {
      suggest++;
    }
    return suggest;
  };

  createTodoItem = (label) => {
    return {
      label: label,
      done: false,
      important: false,
      id: this.getFreeID()
    }
  };

  addItem = (label) => this.setState(
    ({todoData}) => {
      return {
        todoData: [...todoData, this.createTodoItem(label)]
      };
    }, this.saveData
  );

  deleteItem = (id) => this.setState(
    ({todoData}) => {
      return {
        todoData: todoData.filter((item) => {
          return item.id !== id;
        })
      }
    }, this.saveData
  );

  toggleProp = (id, prop) => this.setState(
    ({todoData}) => {
      return {
        todoData: todoData.map((item) => {
          if (item.id === id) {
            item[prop] = !item[prop];
          }
          return item;
        })
      };
    }, this.saveData
  );

  setFilters = (type, value) => {
    switch(type) {
      case 'label':
        this.setState({
            filters: {
              label: value.toLowerCase(),
              status: this.state.filters.status
            }
          }, this.saveData
        );
        break;

      case 'status':
        this.setState({
            filters: {
              label: this.state.filters.label,
              status: value
            }
          }, this.saveData
        );
        break;

      default:
        break;
    }
  };

  render() {
    const {filters, todoData} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;
    return (
      <div className="app">
        <AppHeader done={doneCount} toDo={toDoCount} />

        {(todoData.length)
          ? <div className="top-panel d-flex">
              <SearchPanel
                label={filters.label}
                onFiltersChange={this.setFilters}/>
              <ItemStatusFilter
                status={filters.status}
                onFiltersChange={this.setFilters}/>
            </div>
          : ''}

        <TodoList
          filters={filters}
          todos={todoData}
          onToggleProp={this.toggleProp}
          onDeleted={this.deleteItem} />

        <AddItem onAddItem={this.addItem} />

      </div>
    );
  }
};