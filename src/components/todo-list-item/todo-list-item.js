import React, {Component} from 'react';

export default class TodoListItem extends Component {

  state = {
    important: false,
    done: false
  }

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      };
    });
  };

  onMarkImportant = () => {
    this.setState(({important}) => {
      return {
        important: !important
      };
    });
  };

  render() {
    const {label} = this.props;
    const {done, important} = this.state;

    let classes = 'todo-list-item';
    classes += (done) ? ' done' : '';
    classes += (important) ? ' important' : '';

    return (
      <span className={classes}>
        <span
          className="todo-list-item-label"
          onClick={this.onLabelClick}>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>

        <button type="button"
                onClick={this.onMarkImportant}
                className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>
      </span>
    );
  }
}