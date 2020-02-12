import React, { Component } from "react";
import { connect } from "react-redux";

class EditUser extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newName = this.getName.value;
    const newUsername = this.getUserName.value;
    const newEmail = this.getEmail.value;
    const data = {
      newName,
      newUsername,
      newEmail
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.user.id, data: data });
  };
  render() {
    return (
      <div className="flex-large">
        <form onSubmit={this.handleEdit}>
          <label>Name</label>
          <input
            required
            type="text"
            defaultValue={this.props.user.name}
            ref={input => (this.getName = input)}
            placeholder="Name"
          />
          <label>UserName</label>
          <input
            required
            type="text"
            defaultValue={this.props.user.username}
            ref={input => (this.getUserName = input)}
            placeholder="User Name"
          />
          <label>Email</label>
          <input
            required
            type="text"
            defaultValue={this.props.user.email}
            ref={input => (this.getEmail = input)}
            placeholder="Email"
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditUser);
