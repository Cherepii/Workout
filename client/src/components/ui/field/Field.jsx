import React from 'react'

import styles from "./Field.module.scss"

const Field = ({placeholder, value, onChange, type='text', required}) => {
  return (
    <input 
      className={styles.customInput}
      type={type} 
      value={value} 
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  )
}

export default Field