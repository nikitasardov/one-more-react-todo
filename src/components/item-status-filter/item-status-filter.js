import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-outline-primary active">All</button>
        <button type="button"
                className="btn btn-outline-primary">Active</button>
        <button type="button"
                className="btn btn-outline-primary">Done</button>

      </div>
    );
  }
}


// <div className="btn-group btn-group-toggle" data-toggle="buttons">
// <label className="btn btn-outline-primary">
//   <input type="radio" name="options" id="option1" autocomplete="off" checked="" />
//     All
// </label>
// <label className="btn btn-outline-primary active">
//   <input type="radio" name="options" id="option2" autocomplete="off" />
//     Active
// </label>
// <label className="btn btn-outline-primary">
//   <input type="radio" name="options" id="option3" autocomplete="off" />
//     Done
// </label>
// </div>