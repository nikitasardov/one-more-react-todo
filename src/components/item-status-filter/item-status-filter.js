import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {
  render() {
    const {status, onFiltersChange} = this.props;
    return (
      <div className="btn-group">
        <button type="button"
                onClick={() => onFiltersChange('status', 'all')}
                className={`btn btn-outline-primary ${(status === 'all') ? 'active' : ''}`}>
          All</button>
        <button type="button"
                onClick={() => onFiltersChange('status', 'active')}
                className={`btn btn-outline-primary ${(status === 'active') ? 'active' : ''}`}>
          Active</button>
        <button type="button"
                onClick={() => onFiltersChange('status', 'done')}
                className={`btn btn-outline-primary ${(status === 'done') ? 'active' : ''}`}>
          Done</button>

      </div>
    );
  }
}