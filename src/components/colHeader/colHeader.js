import React from 'react'
import styles from './colHeader.module.scss'

const header = ({children}) => (
  <header className={styles.header}>
    {children}
  </header>
)

export default header