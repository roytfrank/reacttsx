import { ReactNode } from "react";
import classes from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  onCloseModal: () => void;
}

function Modal({ children, onCloseModal }: ModalProps) {
  return (
    <>
      <div className={classes.backdrop} onClick={onCloseModal} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
