import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

import './App.css';

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
    const todos = [...this.state.todos];
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  };

  toggleTodoDone(event, index){
    // console.log(event.target.checked);
    const todos = [...this.state.todos];  // copy the array
    todos[index] = {
      ...todos[index],
      done: event.target.checked  // update the done property on copied todo
    };
    // copy the todo, can also use Object.assign
    this.setState({
      todos
    });
  }

  removeTodo(index){
    const todos = [...this.state.todos];  // copy the array
    todos.splice(index, 1);  // now we have a new array that is missing one of the todos (index)

    this.setState({
      todos
    })
  };

  allDone(){
    const todos = this.state.todos.map(todo => {  // map will create a new array
      // every todo, we will create a new object but done will be set to 'true'
      return {
        title: todo.title,  // can also do ...todo (spread)
        done: true
      }
    })

    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="App">
        <h3>
          { this.state.message2 }
        </h3>
        <NewTodoForm
          newTodo={this.state.newTodo}
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)}
        />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;
