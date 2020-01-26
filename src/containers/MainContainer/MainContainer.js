import React, { Component } from "react"
import styles from "./MainContainer.module.scss"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class MainContainer extends Component {
  render() {
    return <main className={styles.MainContainer}>{this.props.children}</main>
  }
}

export default MainContainer
