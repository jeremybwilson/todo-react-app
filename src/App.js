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
        <form action="" onSubmit={(event) => this.formSubmitted(event)}>
          <label htmlFor="newTodo">New Todo</label>
          <input type="text" onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" value={this.state.newTodo} />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={() => this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            {/* return(<li key={todo.title}>
              <input type="checkbox" name="" id=""/>{todo.title}
            </li>) */}
            return (<li key={todo.title}>
              <input onChange={(event) => this.toggleTodoDone(event, index)} type="checkbox" checked={ todo.done }/>
              {/* <span style={{textDecoration: todo.done ? 'line-through' : 'inherit'}}>{todo.title}</span> */}
              <span className={ todo.done ? 'done' : '' }>{todo.title}</span>
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

export default App;
