import PropTypes from "prop-types";

const App = () => {
  return (
    <div>
      <User>
        <h1>Hello New User</h1>
      </User>
      <User>
        <h1>Hello Old User</h1>
        <p>Welcome</p>
      </User>
    </div>
  );
};

const User = ({ children }) => {
  return (
    <>
      <div className="bg-white m-4">{children}</div>
    </>
  );
};

User.propTypes = {
  children: PropTypes.node,
};

export default App;
