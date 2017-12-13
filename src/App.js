import React, { Component } from 'react';
import TodoList from './TodoList';
import UserView from './UserView';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "todos": [
        { "title": "clean house", "state": "in progress" },
        { "title": "mow lawn", "state": "queued" }
      ],
      "user": { "firstName": "Brent", "lastName": "Gardner" }
    }

    setInterval(() => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.todos.push({ "title": "another thing", "state": "always more to do!" });
        super.setState(newState);
    }, 5000);
  }

  newTodo = (title, state) => {
    const newState = JSON.parse(JSON.stringify(this.state));
    newState.todos.push({ "title": title, "state": state });
    super.setState(newState);
  }

  render() {
    return (<div>
      <UserView firstName={this.state.user.firstName} />
      <TodoList todos={this.state.todos} addOne={this.newTodo} />
    </div>);
  }
}

export default App;
