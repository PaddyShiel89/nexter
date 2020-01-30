import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Lightbox from "../../containers/Lightbox/Lightbox"

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

  //   const images = data.allFile.nodes

  //   const [modalOpen, toggleModal] = useState(false)
  //   const [currentImg, setCurrentImg] = useState(0)

  //   const handleToggleModal = (e, image) => {
  //     e.preventDefault()

  //     setCurrentImg(image)

  //     toggleModal(modalOpen ? false : true)
  //   }

  //   const handleModalImageNext = () => {
  //     const newIndex = currentImg === images.length - 1 ? 0 : currentImg + 1
  //     setCurrentImg(newIndex)
  //     console.log(currentImg)
  //   }

  //   const handleModalImagePrev = () => {
  //     const newIndex = currentImg === 0 ? images.length - 1 : currentImg - 1
  //     setCurrentImg(newIndex)
  //     console.log(currentImg)
  //   }

  //   useEffect(() => {
  //     function handleKeyUp(e) {
  //       e.preventDefault()
  //       const { keyCode, which } = e
  //       if (modalOpen) {
  //         if ((keyCode || which) === 37) {
  //           // Left Arrow Key
  //           console.log("prev")
  //         }
  //         if ((keyCode || which) === 39) {
  //           // Right Arrow Key
  //           console.log("next")
  //           handleModalImageNext()
  //         }
  //       }
  //     }
  //     window.addEventListener("keyup", handleKeyUp)
  //   })

  //   return (
  //     <>
  //       <section className={styles.gallery}>
  //         {images.map((img, index) => (
  //           <Link
  //             key={`${img.childImageSharp.id}Image`}
  //             onClick={e => handleToggleModal(e, index)}
  //             to={img.childImageSharp.fluid.src}
  //           >
  //             <Img
  //               fluid={img.childImageSharp.fluid}
  //               alt={`Home ${index}`}
  //               className={styles.galleryImage}
  //             />
  //           </Link>
  //         ))}
  //       </section>
  //       <Modal
  //         modalOpen={modalOpen}
  //         toggleModalFunction={() => toggleModal(modalOpen ? false : true)}
  //       >
  //         <div className={styles.modal}>
  //           <Img
  //             fluid={images[currentImg].childImageSharp.fluid}
  //             alt={`Home ${currentImg}`}
  //             className={styles.modalImage}
  //           />
  //           <button
  //             className={styles.modalButtonPrev}
  //             onClick={() => handleModalImagePrev()}
  //             aria-labelledby={"GalleryModalButtonPrevHelper"}
  //           >
  //             {`<`}
  //             <span id={"GalleryModalButtonPrevHelper"}>Previous image</span>
  //           </button>
  //           <button
  //             className={styles.modalButtonNext}
  //             onClick={() => handleModalImageNext()}
  //             aria-labelledby={"GalleryModalButtonNextHelper"}
  //           >
  //             {`>`}
  //             <span id={"GalleryModalButtonNextHelper"}>Previous image</span>
  //           </button>
  //         </div>
  //       </Modal>
  //     </>
  //   )

  return <Lightbox images={data.allFile.nodes} />
}

export default Gallery
