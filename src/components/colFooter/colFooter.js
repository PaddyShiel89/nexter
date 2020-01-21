import React from 'react'
import styles from './colFooter.module.scss'

const footer = ({children}) => (
  <footer className={styles.footer}>
    {children}
  </footer>
)

export default footer