import PropTypes from "prop-types";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl underline font-bold">Hello</h1>
      <Card username="Eran" />
    </div>
  );
};

const Card = ({ username }) => {
  return (
    <div>
      <h2>Card</h2>
      {username}
    </div>
  );
};

Card.propTypes = {
  username: PropTypes.string,
};

const User = ({ username }) => {
  return (
    <div>
      <h3>User</h3>
      {username}
    </div>
  );
};

User.propTypes = {
  username: PropTypes.string,
};

export default App;
