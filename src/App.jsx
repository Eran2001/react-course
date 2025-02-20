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
      <User name="Eran" occupation="Engineer" />
      <User name="Hasa" occupation="Designer" />
    </div>
  );
};

const User = ({ name, occupation }) => {
  return (
    <>
      <h1 className="text-3xl">My name is s{name}</h1>
      <p className="text-2xl">I&apos;m a {occupation}.</p>
    </>
  );
};

User.propTypes = {
  name: PropTypes.string,
  occupation: PropTypes.string,
};

export default App;
