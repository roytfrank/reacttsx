import { ReactNode } from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  children: ReactNode;
}

function Modal({ children }: ModalProps) {
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate("..");
  };

  return (
    <>
      <div className={classes.backdrop} onClick={handleCloseModal} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
