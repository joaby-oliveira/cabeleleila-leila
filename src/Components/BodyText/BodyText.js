import React from 'react'
import styles from './BodyText.module.scss'

const BodyText = (props) => {
  return (
    <p className={`${props.center ? styles.alignCenter : ''} ${props.whiteText ? styles.whiteText : ''} ${styles.bodyText}`}>
      {props.children}
    </p>
  )
}

export default BodyText
