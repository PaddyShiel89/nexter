import React, { Component } from "react"
import ReactModal from "react-modal"
import styles from "./Modal.module.scss"

class Modal extends Component {
  state = {
    scrollWidth: null,
  }

  componentDidMount() {
    // Set the width of the scrollbar
    this.setState({
      scrollWidth: `${window.innerWidth - document.body.clientWidth}px`,
    })
  }

  render() {
    // Add right padding to the body when modal is open
    if (typeof window !== `undefined`) {
      document.body.style.paddingRight = this.props.modalOpen
        ? this.state.scrollWidth
        : 0
    }
    return (
      <ReactModal
        bodyOpenClassName={styles.bodyOpen}
        className={styles.content}
        isOpen={this.props.modalOpen}
        onRequestClose={this.props.toggleModalFunction}
        overlayClassName={styles.overlay}
        style={this.props.style}
      >
        {this.props.children}
      </ReactModal>
    )
  }
}

export default Modal

ReactModal.setAppElement("#___gatsby")
