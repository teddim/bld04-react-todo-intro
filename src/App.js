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
            "user": {"firstName": "Brent", "lastName": "Gardner"},
            selectedView: "TodoList"
        };

        setInterval(() => {
            const newState = JSON.parse(JSON.stringify(this.state));
            newState.todos.push({"title": "another thing", "state": "always more to do!"});
            super.setState(newState);
        }, 5000);
    }

    newTodo = (title, state) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.todos.push({"title": title, "state": state});
        super.setState(newState);
    };

    displayBreakTimeComp = () => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.selectedView = 'BreakTime';
        super.setState(newState);
    };

    displayTodoList = () => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.selectedView = 'TodoList';
        super.setState(newState);
    };

    render() {
        let currentView;
        if (this.state.selectedView === "TodoList") {
            currentView =
                <TodoList todos={this.state.todos} addOne={this.newTodo} switchView={this.displayBreakTimeComp}/>

        } else {
            currentView = <BreakTime switchView={this.displayTodoList}/>
        }
        return (<div className="App">
            <Nav/>
            <UserView firstName={this.state.user.firstName}/>
            {currentView}
        </div>);
    }
}

export default App;
