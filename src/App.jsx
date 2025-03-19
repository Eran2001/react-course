import { useState } from "react";

const Example = () => {
  const [load, setLoading] = useState(true);

  return (
    <div className="h-screen bg-gray-900 text-white">
      <h1>{load ? <p>loading...</p> : <p>Nothing...</p>}</h1>
    </div>
  );
};

export default Example;
