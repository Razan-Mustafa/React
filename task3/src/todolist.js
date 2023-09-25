import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],    // Array to store todos
      newTodo: '',  // Input field for adding a new todo
    };
  }

  // Function to handle input field changes
  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  // Function to add a new todo
  addTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      this.setState((prevState) => ({
        todos: [...prevState.todos, this.state.newTodo],
        newTodo: '', // Clear the input field after adding
      }));
    }
  };

  // Function to delete a todo
  deleteTodo = (index) => {
    this.setState((prevState) => {
      const updatedTodos = [...prevState.todos];
      updatedTodos.splice(index, 1);
      return { todos: updatedTodos };
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            placeholder="Add a new todo"
            value={this.state.newTodo}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
