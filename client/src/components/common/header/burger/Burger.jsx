import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {CSSTransition} from "react-transition-group"

import { menuLinks } from './menuBase'
import menuIcon from "../../../../images/icons/hamburger.svg"
import closeIcon from "../../../../images/icons/hamburger-close.svg"

import styles from "./Burger.module.scss"

const Burger = () => {
  const [menu, setMenu] = useState(undefined)

  return (
    <div className={styles.wrapper}>
      <button type='button' onClick={() => setMenu(!menu)}>
        <CSSTransition in={menu} classNames='item' timeout={800} >
          <img src={menu ? closeIcon : menuIcon} alt='burger-menu'/>
        </CSSTransition>
      </button>

      <nav className={`${styles.menu} ${menu ? styles.show : ''}`}>
        <ul>
          {menuLinks.map(i => (
            <li key={i.title} className={styles.link}>
              <Link to={i.link}>{i.title}</Link>
            </li>
          ))}
          <li className={styles.link}>
            <Link to='/logout'>Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Burger