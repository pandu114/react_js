//import logo from './logo.svg'
import React, { Component } from 'react'
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       todos:[{id:1,title:'first tod ',complete:false},
       {id:2,title:'second tod ',complete:false}]
    }
  }
  addTodo = (title)=>{
    console.log('title--------->',title);
    let todos=[...this.state.todos];
    let id = todos[todos.length-1]?todos[todos.length-1]['id']+1:0;
    let newTodo = {
      id:id,
      title:title,
      complete:false
    }
    todos.push(newTodo);
    this.setState({todos:todos})
  }
  completeTodo = (id)=>{
    let todos=[...this.state.todos];
    todos.filter((todo)=>{
      if(todo.id === id){
        todo.complete = true;
      }
    })
    this.setState({todos:todos})
  }
  deleteTodo = (id) =>{
    let todos = [...this.state.todos];
    todos.filter((todo,index)=>{
      if(todo.id=== id){
        todos.splice(index,1);
      }
    })
    this.setState({todos:todos})
  }
  render(){
    return (
      <div className="App">
        <div className='developer'> 
          <span>Developer</span><br/>
          <b>Suresh N</b>
        </div>
      <h1 className='heading'>Todo Application Management with React</h1>
      <div className='todos'>
      {this.state.todos.map(todo=>( 
        <Todo key={todo.id} todo={todo} completeTodo={(id)=>this.completeTodo(id)}
        deleteTodo={(id)=>this.deleteTodo(id)}/>
      ))}
      </div>
     <TodoForm  addTodo={(todo)=>this.addTodo(todo)}/>
    
      </div>
    );
  }
}

//  export default App;
