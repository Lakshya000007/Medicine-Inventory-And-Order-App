import "./Modal.css";
import ReactDOM from "react-dom";

const Overlay = ({ children }) => {
  return <div className="overlay">{children}</div>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay children={props.children} />,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
