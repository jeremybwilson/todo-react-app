import React, { Component } from 'react';
import './App.css';
import { render } from 'react-dom';

class App extends Component{
  constructor(){
    super();
    this.state = {
      message1: 'Hello Jeremy',
      message2: 'Jeremy\'s React Todo App',
      newTodo: '',
      todos: [{
        title: 'Learn Angular',
        done: false
      },{
        title: 'Learn TypeScript',
        done: false
      }]
    };
  }
  newTodoChanged(event){
    this.setState({
      newTodo: event.target.value
    });
  }
  formSubmitted(event){
    event.preventDefault();
    // console.log(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  };
  render(){
    return (
      <div className="App">
        <h3>
          { this.state.message2 }
        </h3>
        <form action="" onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input type="text" onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo} />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {this.state.todos.map(todo => {
            return <li key={todo.title}>{todo.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
