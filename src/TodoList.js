import React, { Component } from 'react';

class TodoList extends Component {

    render() {
        return (
            <div>
                <button onClick={() => this.props.addOne('Get to work!', 'queued')}>Add</button>
                <ul>
                    {this.props.todos.map(p => <li>{p.title}</li>)}
                </ul>
            </div>
        )
    }
}

export default TodoList;
