import React from 'react'
import styles from './colStory.module.scss'

const story = ({children, type}) => {
  let subclass;
  if(type === 'pictures') {
    subclass = styles.story__pictures
  } else {
    subclass = styles.story__content
  }
  return (
    <div className={subclass}>
      {children}
    </div>
  )
}

export default story