import React from 'react'

import styles from './Account.module.scss'
import accountIcon from '../../../images/account.svg'
function Account() {
  return (
    <a href="#" className={`${styles.account} flex crossCenter`}>
      <p className={`${styles.signUp}`}>Criar conta/login</p>
      <img alt="Ícone de conta" src={accountIcon}/>
    </a>
  )
}

export default Account
