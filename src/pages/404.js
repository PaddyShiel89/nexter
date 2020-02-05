import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "../scss/global.scss"
import styles from './404.module.scss'
import MainContainer from "../containers/MainContainer/MainContainer"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <MainContainer containerClass={styles.container}>
      <h3>404: Not Found</h3>
      <h1>The page you're looking for couldn't be found</h1>
      <p>
        This is a single-page site. You'll find everything on our homepage!
      </p>
      <Link to={'/'} className="btn">Return to the homepage</Link>
    </MainContainer>
  </>
)

export default NotFoundPage
