import React from 'react'
import styles from './colSidebar.module.scss'

const sidebar = ({children}) => (
  <div className={styles.sidebar}>
    {children}
  </div>
)

export default sidebar