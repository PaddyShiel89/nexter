import React from "react"
import styles from "./colGallery.module.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

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
    <section className={styles.gallery}>
      {data.allFile.nodes.map((img, index) => (
        <Img
          fluid={img.childImageSharp.fluid}
          key={img.childImageSharp.id}
          alt={`Home ${index}`}
          className={styles.galleryImage}
        />
      ))}
    </section>
  )
}

export default Gallery
