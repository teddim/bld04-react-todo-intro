import React, { Component } from 'react';

class BreakTime extends Component {

  render() {
    return (
        <div className="BreakTime">
            <p className="CompLabel">BreakTime</p>
            <p>Time for a break!  Go grab a coffee.</p>
            <div className="BreakImg">
                <img className="Coffee" src={require("./drew-coffman-1876.jpg")} alt="cup of cappuccino"/>
                <button onClick={this.props.switchView}>Back To Work</button>            
            </div>

        </div>
    );
  }
}

export default BreakTime;
