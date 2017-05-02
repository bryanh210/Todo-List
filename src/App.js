import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// this is to import specific feature from a npm

class TodoApp extends Component{
  constructor(props){
    super(props);
    this.state= {
      todos : [],
      text: ''
      //completed is only for 1 todo
      // completed: false
    }
  }

  handleChange(event){
    // alert('handleChange');
    console.log(this);
    this.setState({
        text: event.target.value
      })
    };

  handleSubmit(event){
      event.preventDefault();

    this.setState({
      //todo is an object
      todos: [... this.state.todos, {text: this.state.text, completed: false}]
    })

  }

//need to get event
  toggle(todo){
    console.log(todo)
  }

  render(){
    console.log(this.state.text)
    return(
      <div>
        <InputTodo handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
        <TodoList todos={this.state.todos} toggle={this.toggle}/>
      </div>
    )
  }
}


class InputTodo extends Component {
  constructor(props){
    super(props);
  };



  render() {

    return (
      <div>
        <h1> Welcome to your Todo app </h1>
        <form onSubmit={this.props.handleSubmit}>
          <label>
          <input type="text" name="text" placeholder="Clean the house" onChange={this.props.handleChange}/>
          </label>
          <input type="submit" value="Submit" ></input>
        </form>

      </div>

    );
  }
}

class TodoList extends Component{
  render(){
    return(
      <ul>
        {this.props.todos.map((todo)=> <TodoItem id={todo.text} text={todo.text} completed={todo.completed} toggle={this.props.toggle}/>)}
      </ul>
    )
  }
}

class TodoItem extends Component{
  constructor(props){
    super(props);
  };
// props state
// props isnt changed
// method





  render(){
    return(
        <li style={{"textDecoration": this.props.completed ? "line-through" : "none"}} key={this.props.id} onClick={this.props.toggle}>{this.props.text}</li>
    );
  }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));
