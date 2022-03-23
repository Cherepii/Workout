import React from 'react'

import styles from "./Button.module.scss"

const Button = ({text, onButtonClick, type='purple'}) => {
  return (
    <div className={styles.wrapper}>
      <button 
        onClick={onButtonClick}
        className={`${styles.button} ${styles[type]}`}>
        {text}
      </button>
    </div>
  )
}

export default Button