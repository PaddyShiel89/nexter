import React from "react"
import ReactModal from "react-modal"
import styles from "./Modal.module.scss"

const Modal = ({ children, modalOpen, style, toggleModalFunction }) => {
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={toggleModalFunction}
      className={styles.content}
      overlayClassName={styles.overlay}
    >
      {children}
    </ReactModal>
  )
}

export default Modal

ReactModal.setAppElement('#___gatsby')