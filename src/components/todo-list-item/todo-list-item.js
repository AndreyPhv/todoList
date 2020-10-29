import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, onDeleted, onToggleImportant, onToggleDone, done, important}) => {
    let labelClassName = 'todoListItemLabel';
    if (done) {labelClassName += ' done'};
    if (important) {labelClassName += ' important'};

    return (
        <div className='d-flex justify-content-between'>
            <span onClick={onToggleDone} className={labelClassName}>{label}</span>
            <div >
                <button className='btn btn-outline-danger fa fa-trash-o mr-1' onClick={onDeleted}></button>
                <button className='btn btn-outline-success fa fa-exclamation' onClick={onToggleImportant}></button>
            </div>
        </div>
    )
}

export default TodoListItem;