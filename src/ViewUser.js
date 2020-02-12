import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./User";
import EditUser from './EditUser';

class ViewUser extends Component {
  render() {
    return (
      <div>
        <h2>View users</h2>
        {this.props.users.map(user => (
          <div key={user.id}>
            {user.editing ? (
              <EditUser user={user} key={user.id} />
            ) : (
              <User key={user.id} user={user} />
            )}
          </div>
        ))}

        {/* {console.log(this.props.users)} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state
  };
};

export default connect(mapStateToProps)(ViewUser);
