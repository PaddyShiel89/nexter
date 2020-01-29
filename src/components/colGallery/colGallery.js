import React, { useState } from "react"
import styles from "./colGallery.module.scss"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import Modal from "../modal/Modal"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query GalleryImages {
      allFile(
        filter: { relativeDirectory: { eq: "gallery" } }
        sort: { fields: childImageSharp___fluid___originalName }
      ) {
        nodes {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes

  const [modalOpen, toggleModal] = useState(false)
  const [currentImg, setCurrentImg] = useState(0)

  const handleToggleModal = (e, image) => {
    e.preventDefault()

    setCurrentImg(image)
    
    toggleModal(modalOpen ? false : true)
  }

  const handleModalImageNext = () => {
    if(currentImg === images.length -1) {
      setCurrentImg(0)
    } else {
      const newIndex = currentImg +1
      setCurrentImg(newIndex)
    }
  }

  const handleModalImagePrev = () => {
    if(currentImg === 0) {
      setCurrentImg(images.length -1)
    } else {
      const newIndex = currentImg -1
      setCurrentImg(newIndex)
    }
  }

  return (
    <>
      <section className={styles.gallery}>
        {images.map((img, index) => (
          <Link
            key={`${img.childImageSharp.id}Image`}
            onClick={e => handleToggleModal(e, index)}
            to={img.childImageSharp.fluid.src}
          >
            <Img
              fluid={img.childImageSharp.fluid}
              alt={`Home ${index}`}
              className={styles.galleryImage}
            />
          </Link>
        ))}
      </section>
      <Modal
        modalOpen={modalOpen}
        toggleModalFunction={() => toggleModal(modalOpen ? false : true)}
      >
        <div className={styles.modal}>
          <Img
            fluid={images[currentImg].childImageSharp.fluid}
            alt={`Home ${currentImg}`}
          />
          <button onClick={() => handleModalImagePrev()}>Prev</button>
          <button onClick={() => handleModalImageNext()}>Next</button>
        </div>
      </Modal>
    </>
  )
}

export default Gallery

// const GalleryItem = ({ img, index }) => {
//   return (
//     <>

//       <Modal
//         modalOpen={modalOpen}
//         key={`${img.childImageSharp.id}Modal`}
//         toggleModalFunction={() => toggleModal(modalOpen ? false : true)}
//       >
//         <div className={styles.modal}>
//           <Img
//             fluid={img.childImageSharp.fluid}
//             alt={`Home ${index}`}
//           />
//         </div>
//       </Modal>
//     </>
//   )
// }
