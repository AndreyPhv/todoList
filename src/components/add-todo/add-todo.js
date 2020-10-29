import React, {Component} from 'react';


export default class AddTodo extends Component {
  state = {
    label: ''
  }

  changeInput = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.label);
    this.setState({
      label: ''
    })
  }


  render() {
    return (
      <form 
        className='d-flex' 
        onSubmit={this.onSubmit} >

        <input 
          className='form-control'
          type="text" 
          placeholder='Write new todo'
          onChange={this.changeInput}
          value={this.state.label} />

        <button 
          className='btn btn-outline-secondary' 
          >Add</button>  

      </form> 
    )
  }
}