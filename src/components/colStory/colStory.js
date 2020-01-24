import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import styles from './colStory.module.scss'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

const story = ({ children, type }) => {
  let subclass;
  if (type === 'pictures') {
    subclass = styles.story__pictures
  } else {
    subclass = styles.story__content
  }
  return (
    <div className={subclass}>
      {children}
    </div>
  )
}

export default story

export const StoryPictures = () => {
  const data = useStaticQuery(graphql`
  query StoryImages {
    background: file(relativePath: { eq: "story/back.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "story/story-1.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "story/story-2.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`)

  // Background image with overlay
  const backgroundOverlay = `linear-gradient(rgba(198, 153, 99, .5), rgba(198, 153, 99, .5))`
  const backgroundImageStack = [ backgroundOverlay, data.background.childImageSharp.fluid ]

  return (
    <BackgroundImage className={styles.story__pictures} fluid={backgroundImageStack}>
      <Img fluid={data.image1.childImageSharp.fluid}
        alt="Couple with new house" className={`${styles.image} ${styles.image1}`} />
      <Img fluid={data.image2.childImageSharp.fluid}
        alt="New house" className={`${styles.image} ${styles.image2}`} />
    </BackgroundImage>
  )
}