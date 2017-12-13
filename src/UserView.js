import React, { Component } from 'react';

class UserView extends Component {

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
            <div className="UserView">
                <p className="CompLabel">UserView</p>
                <h5>Current user is: {this.state.firstName}</h5>
                <input type="text" value={this.state.firstName}
                onChange={this.handleChange} />
            </div>
        );
    }
}

export default UserView;
