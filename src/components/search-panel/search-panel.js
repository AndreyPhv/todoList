import React from 'react';

const SearchPanel = ({changeFilter}) => {
    return (
        <input placeholder='search' type="text" onChange={(e) => changeFilter(e.target.value)}/>
    )
}

export default SearchPanel;