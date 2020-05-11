import React from 'react';

const SearchPanel = ({label, onFiltersChange}) => {

  return (
    <input
      type="text"
      value={label}
      onChange={(e) => onFiltersChange('label', e.target.value)}
      className="form-control search-panel"
      placeholder="Type here to search" />
  );
};

export default SearchPanel;