import React from 'react';

const BreakTime = (props) => {
  return (
      <div className="BreakTime">
        <p className="CompLabel">BreakTime</p>
        <p>Time for a break! Go grab a coffee.</p>
        <div className="BreakImg">
          <img className="Coffee" src={require("./drew-coffman-1876.jpg")}
          alt="cup of cappuccino by Drew Coffman on unsplash"/>
          <button onClick={() => props.displayTodoList()}>Back To Work</button>
        </div>
      </div>
  );
}

export default BreakTime;
