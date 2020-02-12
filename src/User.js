import React, { Component } from "react";
import {connect} from 'react-redux';
class User extends Component {
  render() {
    return (
      <div>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.username}</p>
        <p>{this.props.user.email}</p>
        <button className = "button muted-button"
       onClick={()=>this.props.dispatch({type:'EDIT_USER',id:this.props.user.id})}>
       Edit</button>
        <button className = "button muted-button"
          onClick={() =>
            this.props.dispatch({type:'DELETE_USER', id:this.props.user.id})
          }
        >
          Delete
        </button>
      </div>
    );
  }
}

export default connect()(User);
