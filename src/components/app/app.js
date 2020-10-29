import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddTodo from '../add-todo/';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createNewLabel('make some noize'),
      this.createNewLabel('Learn JS'),
      this.createNewLabel('go away'),
    ],
    dataSelector: 'all',
    searchText: '',
  }

  createNewLabel(label) {
    return (
      {
        label,
        important: false,
        done: false,
        id: this.maxId++,
      }
    );
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArr,
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createNewLabel(text);

    const newArr = [
      ...this.state.todoData,
      newItem
    ]

    this.setState(({todoData}) => {
      return {
        todoData: newArr,
      }      
    })
  }

  toggleProperty = (arr, id, propertyName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propertyName]: !oldItem[propertyName]};

    return [
      ...arr.slice(0, idx),
      newItem, 
      ...arr.slice(idx + 1)
    ];
  }

  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  };

  onToggleDone = (id) => { 
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  };

  setSelector = (selected) => {
    switch (selected) {
      case 'all':
        this.setState({
          dataSelector: 'all',
        })
        break;  
      case 'active':
        this.setState({
          dataSelector: 'active',
        })
        break; 
      case 'done':
        this.setState({
          dataSelector: 'done',
        })
        break; 
      default: 
        alert('error in func selectedData');    
    } 
  }

  changeSearchFilter = (searchText) => {
    this.setState({
      searchText,
    })
  }

  render() {
    const {todoData, dataSelector, searchText} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    let selectedData = todoData.slice().filter((el) => el.label.toLowerCase().includes(searchText.toLowerCase()));
    switch (dataSelector) {
      case 'all':
        break;
      case 'active':
        selectedData = selectedData.filter((el) => el.done === false);
        break;
      case 'done':
        selectedData = selectedData.filter((el) => el.done === true);
        break;
      default: 
        alert('error in func render');   
    }

    return (
      <div style={{maxWidth: '400px', margin:'auto'}}>
        <AppHeader 
          doneCount={doneCount}
          todoCount={todoCount}/>
        <div className='d-flex justify-content-between'>
          <SearchPanel 
            changeFilter={this.changeSearchFilter}/>
          <ItemStatusFilter 
          setSelector={this.setSelector}
          dataSelector={dataSelector}/>
        </div>
        <TodoList 
          todoData={selectedData} 
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}/>
        <AddTodo addTodo={this.addItem}/>
      </div>
    )
  }
}