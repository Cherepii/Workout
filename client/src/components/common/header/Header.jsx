import React from 'react'
import styles from "./Header.module.scss"

import userIcon from "../../../images/icons/user.svg"
import Burger from './burger/Burger'

const Header = () => {
  return (
    <header className={styles.header}>
      <button type='button'><img src={userIcon} alt='user'/></button>

      <Burger />
    </header>
  )
}

export default Header