import React from 'react'
import cl from "classnames"

import styles from "./Alert.module.scss"

const Alert = ({type = 'success', text}) => {
  return (
    <div className={cl(styles.alert, {
      [styles.error]: type === 'error',
      [styles.warning]: type === 'warning',
      [styles.success]: type === 'success'
    })}>
      {text}
    </div>
  )
}

export default Alert