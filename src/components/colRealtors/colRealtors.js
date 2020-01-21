import React from 'react'
import styles from './colRealtors.module.scss'

const realtors = ({children}) => (
  <div className={styles.realtors}>
    {children}
  </div>
)

export default realtors