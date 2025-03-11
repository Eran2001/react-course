import PropTypes from "prop-types";

const User = ({ isLoggedIn }) => {
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome to the system" : "Please Log in First!"}</h2>
    </div>
  );
};

User.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default User;
