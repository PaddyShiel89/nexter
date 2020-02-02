import React from "react"
import styles from "./colFeatures.module.scss"

const features = ({ children, id }) => (
  <section className={styles.features} id={id}>{children}</section>
)

export default features

export const Feature = ({ children, heading, icon }) => (
  <div className={styles.feature}>
    <svg>
      <use xlinkHref={`#sprite_${icon}`} />
    </svg>
    <h4>{heading}</h4>
    {children}
  </div>
)
