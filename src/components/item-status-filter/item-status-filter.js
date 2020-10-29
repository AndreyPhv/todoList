import React from 'react';

const ItemStatusFilter = ({setSelector, dataSelector}) => {
    let allStyle =  'btn',
        activeStyle = 'btn',
        doneStyle = 'btn';

    switch (dataSelector) {
        case 'all':
            allStyle += ' btn-info';
            activeStyle += ' btn-outline-secondary';
            doneStyle += ' btn-outline-secondary';
            break;  
        case 'active':
            activeStyle += ' btn-info';
            allStyle += ' btn-outline-secondary';
            doneStyle += ' btn-outline-secondary';
            break; 
        case 'done':
            activeStyle += ' btn-outline-secondary';
            allStyle += ' btn-outline-secondary';
            doneStyle += ' btn-info';
            break; 
        default: 
            alert('error in func');    
        } 

    return (
        <div>
            <button className={allStyle} onClick={() => setSelector('all')}>All</button>
            <button className={activeStyle} onClick={() => setSelector('active')}>Active</button>
            <button className={doneStyle} onClick={() => setSelector('done')}>Done</button>
        </div>
    )
}

export default ItemStatusFilter;