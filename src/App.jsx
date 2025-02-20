import PropTypes from "prop-types";

const App = () => {
  const onCopy = () => {
    alert("Don't copy me");
  };

  return (
    <div className="text-3xl font-bold underline" onCopy={onCopy}>
      <Password isValid={false} />
    </div>
  );
};

const Valid = () => {
  return <h1>Valid Password</h1>;
};

const InValid = () => {
  return <h1>Invalid Password</h1>;
};

const Password = ({ isValid }) => {
  return (
    <>
      <div>{isValid ? <Valid /> : <InValid />}</div>
    </>
  );
};

Password.propTypes = {
  isValid: PropTypes.bool,
};

export default App;
