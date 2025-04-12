import { useState } from "react";
import Example from "./Modal";

const App = () => {
  const [role] = useState("owner");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div
        className={`flex justify-center items-center h-full transition-all duration-300 ${
          isModalOpen ? "blur-xl" : ""
        }`}
      >
        {role === "owner" && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Add
          </button>
        )}
      </div>

      {isModalOpen && (
        <div className="absolute inset-0 z-50">
          <Example onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default App;
