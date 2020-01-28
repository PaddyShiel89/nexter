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

  return (
    <>
      <section className={styles.gallery}>
        {data.allFile.nodes.map((img, index) => (
          <GalleryItem img={img} index={index} key={img.childImageSharp.id} />
        ))}
      </section>
    </>
  )
}

export default Gallery

const GalleryItem = ({img, index}) => {
  const [modalOpen, toggleModal] = useState(false)
  const linkClick = e => {
    e.preventDefault()
    toggleModal(modalOpen ? false : true)
  }
  return (
    <>
      <Link
        onClick={e => linkClick(e)}
        to={img.childImageSharp.fluid.src}
      >
        <Img
          fluid={img.childImageSharp.fluid}
          alt={`Home ${index}`}
          className={styles.galleryImage}
        />
      </Link>

      <Modal
        modalOpen={modalOpen}
        key={`${img.childImageSharp.id}Modal`}
        toggleModalFunction={() => toggleModal(modalOpen ? false : true)}
      >
        <div className={styles.modal}>
          <Img
            fluid={img.childImageSharp.fluid}
            alt={`Home ${index}`}
          />
        </div>
      </Modal>
    </>
  )
}
