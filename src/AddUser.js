import React, { Component } from "react";
import { connect } from "react-redux";
class AddUser extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getName.value;
    const username = this.getUserName.value;
    const email = this.getEmail.value;
    const data = {
      id: new Date(),
      name,
      username,
      email,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_USER",
      data
    });
    this.getName.value = "";
    this.getUserName.value = "";
    this.getEmail.value = "";
    //console.log(data);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            required
            type="text"
            ref={input => (this.getName = input)}
            placeholder="Name"
          />
          <label>UserName</label>
          <input
            required
            type="text"
            ref={input => (this.getUserName = input)}
            placeholder="User Name"
          />
          <label>Email</label>
          <input
            required
            type="email"
            ref={input => (this.getEmail = input)}
            placeholder="Email"
          />
          <button>Add New User</button>
        </form>
      </div>
    );
  }
}
export default connect()(AddUser);
