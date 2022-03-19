import React from 'react'
import styles from "./Header.module.scss"

import userIcon from "../../../images/icons/user.svg"
import menuIcon from "../../../images/icons/hamburger.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <button type='button'><img src={userIcon} alt='user'/></button>
      <button type='button'><img src={menuIcon} alt='burger-menu'/></button>
    </header>
  )
}

export default Header