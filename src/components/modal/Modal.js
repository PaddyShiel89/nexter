import React from "react"
import ReactModal from "react-modal"
import styles from "./Modal.module.scss"

const Modal = ({ children, modalOpen, style, toggleModalFunction }) => {

  if(modalOpen) {
    document.body.style.paddingRight = `${window.innerWidth - document.body.clientWidth}px`
  } else {
    document.body.style.paddingRight = 0
  }

  return (
    <ReactModal
      bodyOpenClassName={styles.bodyOpen}
      className={styles.content}
      isOpen={modalOpen}
      onRequestClose={toggleModalFunction}
      overlayClassName={styles.overlay}
    >
      {children}
    </ReactModal>
  )
}

export default Modal

ReactModal.setAppElement('#___gatsby')