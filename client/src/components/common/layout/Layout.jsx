import React from 'react'
import Header from '../header/Header'
import styles from "./Layout.module.scss"

const Layout = ({children, bgImage, height = '100%'}) => {
  return (
    <div className={styles.wrapper} style={{height, backgroundImage: `url(${bgImage})`}}>
      <Header />
      {children}
    </div>
  )
}

export default Layout