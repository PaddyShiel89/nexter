import React, { Component } from "react"
import styles from "./MainContainer.module.scss"
import ColSidebar from "../../components/colSidebar/colSidebar"
import ColFooter from "../../components/colFooter/colFooter"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class MainContainer extends Component {
  render() {
    return (
      <div className={styles.MainContainer}>
        <ColSidebar />
        <main className={this.props.containerClass}>{this.props.children}</main>
        <ColFooter />
      </div>
    )
  }
}

export default MainContainer
