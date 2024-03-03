import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./modal.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-bg blur grayscale"></div>
      <div className="modal">
        
        <p className="close-btn" onClick={onClose}>
          X
        </p>
        <div className="modal-content">{children}</div>
        <Link className="register-btn" to={"/register"}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default CustomModal;
