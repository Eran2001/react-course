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
    </div>
  );
};

export default App;
