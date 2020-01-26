import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import styles from "./colHeader.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderImages {
      logo: file(relativePath: { eq: "header/logo.png" }) {
        childImageSharp {
          fixed(height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoBBC: file(relativePath: { eq: "header/logo-bbc.png" }) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoBi: file(relativePath: { eq: "header/logo-bi.png" }) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoForbes: file(relativePath: { eq: "header/logo-forbes.png" }) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logoTechcrunch: file(relativePath: { eq: "header/logo-techcrunch.png" }) {
        childImageSharp {
          fixed(height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      background: file(relativePath: { eq: "header/hero.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // Background image with overlay
  const backgroundOverlay = `linear-gradient(rgba(16, 29, 44, .93), rgba(16, 29, 44, .93))`
  const backgroundImageStack = [
    backgroundOverlay,
    data.background.childImageSharp.fluid,
  ]

  return (
    <BackgroundImage
      Tag="header"
      className={styles.header}
      fluid={backgroundImageStack}
    >
      <Img
        className={styles.logo}
        fixed={data.logo.childImageSharp.fixed}
        alt="nexter logo"
      />
      <h3>Your own home:</h3>
      <h1>The ultimate personal freedom</h1>
      <button>View our properties</button>
      <div className={styles.asSeenOn__text}>As seen on</div>
      <div className={styles.asSeenOn}>
        <Img
          className={styles.asSeenOn__image}
          fixed={data.logoBBC.childImageSharp.fixed}
          alt="BBC logo"
        />
        <Img
          className={styles.asSeenOn__image}
          fixed={data.logoForbes.childImageSharp.fixed}
          alt="Forbes logo"
        />
        <Img
          className={styles.asSeenOn__image}
          fixed={data.logoTechcrunch.childImageSharp.fixed}
          alt="TechCrunch logo"
        />
        <Img
          className={styles.asSeenOn__image}
          fixed={data.logoBi.childImageSharp.fixed}
          alt="Business Insider logo"
        />
      </div>
    </BackgroundImage>
  )
}

export default Header
