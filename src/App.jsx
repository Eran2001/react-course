const App = () => {
  return (
    <div className="text-3xl font-bold underline">
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

export default App;
