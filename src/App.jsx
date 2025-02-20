const App = () => {
  return (
    <div>
      <h1 className="text-3xl underline font-bold">Hello</h1>
      <User username="Eran" password="1234" />
      <User>
        <h2>Hello User!</h2>
      </User>
      <User>
        <h2 className="text-yellow-800">Hello World!</h2>
      </User>
    </div>
  );
};

const User = ({ username, password, children }) => {
  return (
    <>
      <h2 className="text-2xl">{username}</h2>
      <h3 className="text-2xl">{password}</h3>
      {children}
    </>
  );
};

export default App;
