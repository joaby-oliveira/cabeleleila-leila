import React from 'react'
import logo from '../../images/logo.svg'

import styles from './Navbar.module.scss'
import Menu from './Menu/Menu'
import Button from '../Button/Button'
import Account from './Account/Account'

function Navbar() {
  return (
    <header className={`${styles.navbar} flex mainBetween crossCenter`}>
      <img alt='Cabeleleila Leila' src={logo} />
      <div class='flex'>
        <Menu />
        <Button path="/cadastro" littleSize={true} primaryColor={true}>AGENDAR</Button>
        <Account />
      </div>
    </header>
  )
}

export default Navbar
