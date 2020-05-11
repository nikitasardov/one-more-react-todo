import React, {Component} from 'react';

export default class AddItem extends Component {
  state = {
    newItemLabel: ''
  };

  onAddItem = (e) => {
    e.preventDefault();
    if (!this.state.newItemLabel) return false;
    
    this.props.onAddItem(this.state.newItemLabel);
    this.setState({newItemLabel: ''});
  }

  render() {
    let classes = "btn";
    classes += (this.state.newItemLabel)
      ? ' btn-success'
      : ' btn-outline-success disabled';
    return (
      <form className="add-item d-flex"
            onSubmit={this.onAddItem}>
        <input 
          type="text"
          className="form-control"
          value={this.state.newItemLabel}
          onChange={(e) => this.setState({newItemLabel: e.target.value})}
          placeholder="Add new task" />
        <div className="btn-group">
          <button type="submit"
                  className={classes}>Add</button>
        </div>
      </form>
    );
  };
}