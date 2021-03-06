import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Lightbox from "../../containers/Lightbox/Lightbox"

const Gallery = ({ id }) => {
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
              ...GatsbyImageSharpFluid_withWebp
              originalName
            }
          }
        }
      }
    }
  `)

  return <Lightbox images={data.allFile.nodes} id={id} />
}

export default Gallery
