import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Modal from "../Modal/Modal"
import styles from "./Lightbox.module.scss"
import { Swipeable } from "react-swipeable"

class Lightbox extends Component {
  state = {
    modalOpen: false,
    currentImg: 0,
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeyUp)
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyUp)
  }

  // Gallery thumbnail clicks
  handleClickImage = (index, e) => {
    e.preventDefault()
    this.setState({
      modalOpen: !this.state.modalOpen,
      currentImg: index,
    })
  }

  // Keyboard events
  handleKeyUp = (e) => {
    e.preventDefault()
    const { keyCode, which } = e
    if ((keyCode || which) === 37) {
      // Left Arrow Key
      this.handleSetPreviousImage()
    }
    if ((keyCode || which) === 39) {
      // Right Arrow Key
      this.handleSetNextImage()
    }
  }

  handleSetNextImage = () => {
    const next = this.state.currentImg === this.props.images.length - 1 ? 0 : this.state.currentImg + 1
    this.setState({ currentImg: next })
  }

  handleSetPreviousImage = () => {
    const prev = this.state.currentImg === 0 ? this.props.images.length - 1 : this.state.currentImg - 1
    this.setState({ currentImg: prev })
  }

  handleToggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  render() {

    const swipeConfig = { delta: 60 }

    return (
      <>
        <section className={styles.Gallery} id={this.props.id}>
          {this.props.images.map((img, i) => (
            <Link
              className={styles.GalleryLink}
              key={`${img.childImageSharp.id}Img`}
              onClick={this.handleClickImage.bind(this, i)}
              to={img.childImageSharp.fluid.src}
            >
              <Img
                alt={`Home ${i}`}
                className={styles.GalleryImage}
                fluid={img.childImageSharp.fluid}
              />
            </Link>
          ))}
        </section>
        <Modal
          modalOpen={this.state.modalOpen}
          toggleModalFunction={this.handleToggleModal.bind(this)}
        >
          <Swipeable
            className={styles.modal}
            onSwipedLeft={this.handleSetNextImage.bind(this)}
            onSwipedRight={this.handleSetPreviousImage.bind(this)}
            {...swipeConfig}
          >
            <Img
              fluid={this.props.images[this.state.currentImg].childImageSharp.fluid}
              alt={`Home ${this.state.currentImg}`}
              className={styles.modalImage}
            />
            <button
              aria-labelledby={"GalleryModalButtonCloseHelper"}
              className={styles.modalButtonClose}
              onClick={this.handleToggleModal.bind(this)}
            >
              {`×`}
              <span id={"GalleryModalButtonCloseHelper"}>Close</span>
            </button>
            <button
              aria-labelledby={"GalleryModalButtonPrevHelper"}
              className={styles.modalButtonPrev}
              onClick={this.handleSetPreviousImage.bind(this)}
            >
              {`<`}
              <span id={"GalleryModalButtonPrevHelper"}>Previous image</span>
            </button>
            <button
              aria-labelledby={"GalleryModalButtonNextHelper"}
              className={styles.modalButtonNext}
              onClick={this.handleSetNextImage.bind(this)}
            >
              {`>`}
              <span id={"GalleryModalButtonNextHelper"}>Previous image</span>
            </button>
          </Swipeable>
        </Modal>
      </>
    )
  }
}

export default Lightbox
