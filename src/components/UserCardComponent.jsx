import React from "react";
import PropTypes from "prop-types";

const UserCardComponent = React.memo(({ user }) => {
  return (
    <div className="card-container">
      <span className={user.online ? "pro online" : "pro offline"}>
        {user.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={user.profile} alt="user" className="img" />
      <h3>{user.name}</h3>
      <h3>{user.city}</h3>
      <p>{user.description}</p>
      <div className="button">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

UserCardComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCardComponent;
