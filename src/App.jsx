import { useState } from "react";
import Example from "./Modal";

const App = () => {
  const [role, setRole] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className={`relative w-full h-screen ${role ? "bg-grey" : "bg-black"}`}
    >
      <div
        className={`flex justify-center items-center h-full transition-all duration-300 ${
          isModalOpen ? "blur-xl" : ""
        }`}
      >
        {role && (
          <div className="flex flex-col items-center justify-center h-full">
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add
            </button>
          </div>
        )}
        <button
          onClick={() => setRole(!role)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Role
        </button>
      </div>

      {isModalOpen && (
        <div className="absolute inset-0 z-100">
          <Example onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default App;
