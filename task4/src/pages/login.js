import React, { Component } from "react";
import '../login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // Add logic for handling the login here
//     console.log("Login submitted with the following data:");
//     console.log("Username:", this.state.username);
//     console.log("Password:", this.state.password);
//   };

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
            //   value={this.state.username}
            //   onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
            //   value={this.state.password}
            //   onChange={this.handleInputChange}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
