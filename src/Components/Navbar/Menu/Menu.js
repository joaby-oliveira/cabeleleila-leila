import React from 'react'

import styles from './Menu.module.scss'

function Navbar() {
  return (
    <ul className={`${styles.menu} flex`}>
      <li className={`${styles.menuItem} flex crossCenter`}>
        <a href='/#sobre'>sobre</a>
      </li>
      <li className={`${styles.menuItem} flex crossCenter`}>
        <a href='/#location'>localização</a>
      </li>
      <li className={`${styles.menuItem} flex crossCenter`}>
        <a href='/#contact'>contato</a>
      </li>
    </ul>
  )
}

export default Navbar
