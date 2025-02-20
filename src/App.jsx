import PropTypes from "prop-types";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <User username="eran2001" password="1234" />
      <User username="hasa0416" password="1234" />
    </div>
  );
};

const User = ({ username, password }) => {
  return (
    <>
      <h1>{username}</h1>
      <h2>{password}</h2>
    </>
  );
};

User.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
};

export default App;
