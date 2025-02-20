import { useState } from "react";

const App = () => {
  const [movie, setMovie] = useState({
    title: "Titanic",
    ratings: 10,
  });

  return (
    <div>
      <h1 className="text-3xl underline font-bold">Hello</h1>
      <h2 className="text-2xl">{movie.title}</h2>
      <h5
        className={`text-2xl ${
          movie.ratings === 8
            ? "text-red-500 bg-amber-500"
            : "text-yellow-500 bg-red-500"
        }`}
      >
        {movie.ratings}
      </h5>
    </div>
  );
};

export default App;
