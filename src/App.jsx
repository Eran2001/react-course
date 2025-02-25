import { useState, useEffect } from "react";

const App = () => {
  // State for filter input and filtered data
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data from the table
  useEffect(() => {
    const tableRows = document.querySelectorAll("table tbody tr");
    const tableData = Array.from(tableRows).map((row) => {
      const name = row.cells[0].textContent;
      const price = parseInt(row.cells[1].textContent, 10);
      return { name, price };
    });
    setFilteredData(tableData);
  }, []);

  // Handle input change
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);

    // Filter the data based on input
    const tableRows = document.querySelectorAll("table tbody tr");
    const tableData = Array.from(tableRows).map((row) => {
      const name = row.cells[0].textContent;
      const price = parseInt(row.cells[1].textContent, 10);
      return { name, price };
    });

    // Filter data based on the name
    const filtered = tableData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="main-div border-2 border-black m-4 bg-teal-400">
        <h1 className="text-2xl font-bold underline m-2 p-2">Hello</h1>
        <div className="input">
          <input
            type="text"
            placeholder="Filter fines"
            value={filter}
            onChange={handleFilterChange}
            className="p-2 border rounded"
          />
        </div>
      </div>
      <div className="table">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
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
