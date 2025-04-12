import PropTypes from "prop-types";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-10 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p>This is your modal content.</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
