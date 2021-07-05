import React from 'react'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'
const Button = (props) => {
  const { littleSize, primaryColor, path } = props
  return (
    <Link to={path} className={`${styles.button} ${primaryColor ? styles.primaryColor : styles.secondaryColor} ${littleSize ? styles.littleSize : styles.bigSize}`}>
      {props.children}
    </Link>
  )
}

export default Button
