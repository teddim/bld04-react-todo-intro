import React, {Component} from 'react';

class TodoList extends Component {
    constructor(props){
      super(props)
      this.state = {
        todo: ""
      }
    }

    submit = (e)=> {
      e.preventDefault()
      this.props.newTodo(this.state.todo)
    }

    render() {
        return (
            <div>
              <p className="CompLabel">TodoList</p>
              <h5>To Do:</h5>
              <ol>
                {this.props.todos.map((todo,i) => <li key={i}>{todo.title}</li>)}
              </ol>
              <div className="TodoBtns">
                <form onSubmit={this.submit}>
                  <input type="text" onChange={(e)=> {
                    this.setState({todo: e.target.value})
                  }}></input>
                  <button>Add</button>

                </form>
                <button onClick={() => this.props.displayBreakTimeComp()}>I need a break!</button>
                </div>
            </div>
        )
    }
}

export default TodoList;
