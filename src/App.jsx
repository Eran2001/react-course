import { useId } from "react";

const App = () => {
  const id = useId();

  return (
    <div>
      <h1 className="text-2xl font-bold underline">Hello</h1>
      <label htmlFor={`${id}-fname`}>First Name: </label>
      <input className="border-2" type="text" name="" id={`${id}-fname`} />
      <br />

      <label htmlFor={`${id}-lname`}>Last Name: </label>
      <input className="border-2" type="text" name="" id={`${id}-lname`} />
    </div>
  );
};

export default App;
