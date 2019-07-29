import React, {Component} from 'react';
import TodoList from './TodoList';
import UserView from './UserView';
import Nav from './Nav';
import BreakTime from './BreakTime';
import './styles/App.css';
import './styles/skeleton.css';
import './styles/normalize.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "todos": [
                {"title": "clean house", "state": "in progress"},
                {"title": "mow lawn", "state": "queued"}
            ],
            "user": {"firstName": "Teddi", "lastName": "Maull"},
            "selectedView": "TodoList"
        };
    }

    newTodo = (todo) => {
        this.setState({todos: [...this.state.todos,{title:todo, "state": "queued"}]});
    };

    displayBreakTimeComp = () => {
        this.setState({selectedView: "BreakTime"});
    };

    displayTodoList = () => {
        this.setState({selectedView: "TodoList"});
    };

    render() {
        let currentView;
        if (this.state.selectedView === "TodoList") {
            currentView =
                <TodoList
                  todos={this.state.todos}
                  newTodo={this.newTodo}
                  displayBreakTimeComp={this.displayBreakTimeComp}/>;

        } else {
            currentView = <BreakTime displayTodoList={this.displayTodoList}/>;
        }
        return (<div className="App">
          <Nav/>
          <UserView
            firstName={this.state.user.firstName}
            totalTodo={this.state.todos.length}/>

            {currentView}
        </div>);
    }
}

export default App;
