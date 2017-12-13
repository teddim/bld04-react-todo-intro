import React, { Component } from 'react';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: props.firstName
        };
    }

    handleChange = (event) => {
        const newState = JSON.parse(JSON.stringify(this.state));
        newState.firstName = event.target.value; // text in the box
        super.setState(newState);        
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.firstName}
                    onChange={this.handleChange} />
            </div>);
    }
}

export default TodoList;
