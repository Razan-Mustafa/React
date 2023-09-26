import React, { Component } from "react";
import "../register.css"

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // Add logic for handling user registration here
//     console.log("Registration submitted with the following data:");
//     console.log("First Name:", this.state.firstName);
//     console.log("Last Name:", this.state.lastName);
//     console.log("Email:", this.state.email);
//     console.log("Password:", this.state.password);
//     console.log("Confirm Password:", this.state.confirmPassword);
//   };

  render() {
    return (
      <div className="register-container">
        <h2>Register</h2>
        <form 
        // onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
            //   value={this.state.firstName}
            //   onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
            //   value={this.state.lastName}
            //   onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
            //   value={this.state.email}
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

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            //   value={this.state.confirmPassword}
            //   onChange={this.handleInputChange}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
