const App = () => {
  return (
    <>
      <div className="main-div border-2 border-black m-4 bg-teal-400">
        <h1 className="text-2xl font-bold underline m-2 p-2">Hello</h1>
        <div className="input">
          <input type="text" name="" placeholder="filter fines" id="" />
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Era</td>
              <td>20000</td>
            </tr>
            <tr>
              <td>Hasa</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>Neo</td>
              <td>30000</td>
            </tr>
            <tr>
              <td>Tara</td>
              <td>40000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
