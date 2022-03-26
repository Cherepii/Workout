import React from 'react'
import cl from "classnames"

import Header from '../header/Header'
import styles from "./Layout.module.scss"

const Layout = ({userEmail = '', children, bgImage, heading = ''}) => {
  return (
    <div 
      className={cl(styles.wrapper, {
        [styles.otherPages]: heading})} 

      style={{backgroundImage: `url(${bgImage})`}}>

      <Header userEmail={userEmail} />
      {heading && <h1 className={styles.title}>{heading}</h1>}
      {children && <div>{children}</div>}
    </div>
  )
}

export default Layout