import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Burger from './burger/Burger'

import userIcon from "../../../images/icons/user.svg"
import arrowIcon from "../../../images/icons/arrow.svg"
import styles from "./Header.module.scss"

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {location.pathname === '/' ?
        <button type='button'>
          <img src={userIcon} alt='user'/>
        </button>

      : <button type='button' onClick={() => navigate(-1)}>
          <img src={arrowIcon} alt='user'/>
        </button>
      }

      <Burger />
    </header>
  )
}

export default Header