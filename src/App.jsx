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
      <User />
    </div>
  );
};

const User = ({ username }) => {
  return (
    <div>
      <h3>User</h3>
      {username}
    </div>
  );
};

export default App;
