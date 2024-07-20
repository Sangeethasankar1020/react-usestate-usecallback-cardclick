import React from "react";
import PropTypes from "prop-types";

const UserTableComponent = React.memo(({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Description</th>
          <th>Skills</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.city}</td>
            <td>{user.description}</td>
            <td>{user.skills.join(", ")}</td>
            <td>{user.online ? "Online" : "Offline"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});

UserTableComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
      online: PropTypes.bool.isRequired,
      profile: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserTableComponent;
