import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Modal from "../../components/modal/Modal"
import styles from "./Lightbox.module.scss"

class Lightbox extends Component {
  state = {
    modalOpen: false,
    currentImg: 0,
  }

  handleClickImage = (index, e) => {
    e.preventDefault()
    this.setState({
      modalOpen: !this.state.modalOpen,
      currentImg: index,
    })
    console.log(this.state.modalOpen)
    console.log(this.state.currentImg)
  }

  handleToggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  render() {
    return (
      <>
        <section className={styles.Gallery}>
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
          <div className={styles.modal}>
            <Img
              fluid={this.props.images[this.state.currentImg].childImageSharp.fluid}
              alt={`Home ${this.state.currentImg}`}
              className={styles.modalImage}
            />
            <button
              className={styles.modalButtonPrev}
              aria-labelledby={"GalleryModalButtonPrevHelper"}
            >
              {`<`}
              <span id={"GalleryModalButtonPrevHelper"}>Previous image</span>
            </button>
            <button
              className={styles.modalButtonNext}
              aria-labelledby={"GalleryModalButtonNextHelper"}
            >
              {`>`}
              <span id={"GalleryModalButtonNextHelper"}>Previous image</span>
            </button>
          </div>
        </Modal>
      </>
    )
  }
}

export default Lightbox
