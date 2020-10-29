import React from 'react';
import TodoListItem from '../todo-list-item';

const TodoList = ({todoData, onDeleted, onToggleImportant, onToggleDone}) => {
    const todoItems = todoData.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem 
                    {...itemProps} 
                    onDeleted={() => onDeleted(id)} 
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}/>
            </li>
        )
    })

    return (
        <ul className='list-group'>
            {todoItems}
        </ul>
    )
}

export default TodoList;