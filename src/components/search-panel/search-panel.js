import React from 'react';

const SearchPanel = () => {
  const searchText ='Type here to search';

  return (
    <input 
      type="text"
      className="form-control search-panel"
      placeholder={searchText} />
  );
};

export default SearchPanel;