import React from 'react'
import styles from './colHomes.module.scss'

const homes = ({children}) => (
  <section className={styles.homes}>
    {children}
  </section>
)

export default homes