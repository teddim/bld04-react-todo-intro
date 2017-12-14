import React, { Component } from 'react';

class TodoList extends Component {

    render() {
        return (
            <div>
                <p className="CompLabel">TodoList</p>
                <h5>To Do:</h5>
                <ol>
                    {this.props.todos.map(p => <li>{p.title}</li>)}
                </ol>
                <div className="TodoBtns">
                    <button onClick={() => this.props.addOne('Get to work!', 'queued')}>Add</button>
                    <button onClick={() => this.props.switchView()}>I need a break!</button>
                </div>
            </div>
        )
    }
}

export default TodoList;
