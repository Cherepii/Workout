import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Burger from './burger/Burger'

import userIcon from "../../../images/icons/user.svg"
import arrowIcon from "../../../images/icons/arrow.svg"
import dumbbell from "../../../images/icons/dumbbell.svg"

import styles from "./Header.module.scss"
import { useAuth } from '../../../hooks/useAuth'

const Header = ({userEmail}) => {
  const {isAuth} = useAuth();
  
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {location.pathname === '/' ?
        <div className={styles.userInfo}>
          <button type='button' onClick={() => navigate(isAuth ? '/profile' : '/auth')}>
            <img draggable={false} src={isAuth ? dumbbell : userIcon} alt='user'/>
          </button>
          <div className={styles.user}>{userEmail}</div>
        </div>

      : <button type='button' onClick={() => navigate(-1)}>
          <img draggable={false} src={arrowIcon} alt='user'/>
        </button>
      }

      <Burger />
    </header>
  )
}

export default Header