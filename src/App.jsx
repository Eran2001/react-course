import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const App = () => {
  return (
    <div className="border-2 border-black m-4 bg-teal-400">
      <h1 className="text-2xl font-bold underline m-2 p-2">Hello</h1>
      <DotLottieReact src="path/to/animation.lottie" loop autoplay />
    </div>
  );
};

export default App;
