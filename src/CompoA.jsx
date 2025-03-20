import CompoB from "./CompoB";

const CompoA = () => {
  return (
    <div className="box">
      <h1>CompoA</h1>
      <CompoB />
    </div>
  );
};

export default CompoA;
