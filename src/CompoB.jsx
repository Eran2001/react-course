import CompoC from "./CompoC";

const CompoB = ({ name }) => {
  return (
    <div className="box">
      <h1>CompoB</h1>
      <CompoC name={name} />
    </div>
  );
};

export default CompoB;
