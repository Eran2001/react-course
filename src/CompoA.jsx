import CompoB from "./CompoB";

const CompoA = () => {
  return (
    <div>
      <h1 className="box">CompoA</h1>
      <CompoB />
    </div>
  );
};

export default CompoA;
