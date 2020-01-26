import React, { Component } from "react"
import styles from "./MainContainer.module.scss"

class MainContainer extends Component {
  render() {
    return <main className={styles.MainContainer}>{this.props.children}</main>
  }
}

export default MainContainer
