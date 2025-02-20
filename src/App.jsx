import PropTypes from "prop-types";

const App = () => {
  const myList = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1 className="text-3xl">Hello</h1>
      {myList.map((item, index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))}
      <User name="Eran" />
    </div>
  );
};

const User = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

User.propTypes = {
  name: PropTypes.string,
};

export default App;
