import React from 'react'
import styles from './colGallery.module.scss'

const gallery = ({children}) => (
  <section className={styles.gallery}>
    {children}
  </section>
)

export default gallery