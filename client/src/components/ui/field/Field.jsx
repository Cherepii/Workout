import React from 'react'

import styles from "./Field.module.scss"

const Field = ({placeholder, value, onChange, type='text'}) => {
  return (
    <input 
      className={styles.customInput}
      type={type} 
      value={value} 
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Field