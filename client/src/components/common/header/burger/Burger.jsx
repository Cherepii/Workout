import {Link} from "react-router-dom"
import {CSSTransition} from "react-transition-group"

import { menuLinks } from './menuBase'
import menuIcon from "../../../../images/icons/hamburger.svg"
import closeIcon from "../../../../images/icons/hamburger-close.svg"

import styles from "./Burger.module.scss"
import { useOutsideAlerter } from '../../../../hooks/useOutsideAlerter'
import { useAuth } from '../../../../hooks/useAuth'

const Burger = () => {
  const {ref, isComponentVisible, setIsComponentVisible} = useOutsideAlerter(false)
  const {setIsAuth} = useAuth()

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuth(false)
    setIsComponentVisible(false)
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <button type='button' onClick={() => setIsComponentVisible(!isComponentVisible)}>
        <CSSTransition in={isComponentVisible} classNames='item' timeout={800} >
          <img draggable={false} src={isComponentVisible ? closeIcon : menuIcon} alt='burger-menu'/>
        </CSSTransition>
      </button>

      <nav className={`${styles.menu} ${isComponentVisible ? styles.show : ''}`}>
        <ul>
          {menuLinks.map(i => (
            <li key={i.title} className={styles.link}>
              <Link onClick={() => setIsComponentVisible(false)} to={i.link}>{i.title}</Link>
            </li>
          ))}
          <li className={styles.link}>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Burger