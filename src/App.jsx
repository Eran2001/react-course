import PropTypes from "prop-types";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <User username="eran2001" password="1234" />
      <User username="hasa0416" password="1234" />
      <User>
        <h1>Hello New User</h1>
      </User>
      <User>
        <h1>Hello Old User</h1>
      </User>
    </div>
  );
};

const User = ({ username, password, children }) => {
  return (
    <>
      <h1 className="text-2xl bg-amber-400 w-42">{username}</h1>
      <h2 className="text-2xl bg-amber-300 w-42">{password}</h2>
      {children && <div className="bg-gray-200 p-4 m-2">{children}</div>}
    </>
  );
};

User.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  children: PropTypes.node,
};

export default App;
