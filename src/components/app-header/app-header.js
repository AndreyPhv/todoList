import React from 'react';

const AppHeader = ({doneCount, todoCount}) => {
    return (
        <div className='d-flex justify-content-between'>
            <h1>ToDo List</h1>
            <span className='pt-4'>{todoCount} to do, {doneCount} done</span>
        </div>
    )
}

export default AppHeader;