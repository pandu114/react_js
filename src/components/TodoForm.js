import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         todoText:''
      }
    }
    addTodo = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
        this.setState({todoText:''})
    }
  render() {
    return (
      <div>
          <form onSubmit={this.addTodo}>
          <input type='text' value={this.state.todoText}
          onChange={(e)=>this.setState({todoText:e.target.value})} placeholder='Add your todo here........'/>
        </form>
      </div>
    )
  }
}
