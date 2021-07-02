import React from 'react'
import styles from './Button.module.scss'
const Button = (props) => {
  const { littleSize, primaryColor, path } = props
  return (
    <a href={path} className={`${styles.button} ${primaryColor ? styles.primaryColor : styles.secondaryColor} ${littleSize ? styles.littleSize : styles.bigSize}`}>
      {props.children}
    </a>
  )
}

export default Button
