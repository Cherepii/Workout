import React from 'react'
import styles from "./Counters.module.scss"

const Counters = ({data}) => {
  const {minutes, kgs, workouts} = data
  return (
    <div className={styles.wrapper}>
      <div className={styles.count}>
        <span className={styles.name}>Minutes</span>
        <span className={styles.value}>{minutes}</span>
      </div>
      <div className={styles.count}>
        <span className={styles.name}>Kgs</span>
        <span className={styles.value}>{kgs}</span>
      </div>
      <div className={styles.count}>
        <span className={styles.name}>Workouts</span>
        <span className={styles.value}>{workouts}</span>
      </div>
    </div>
  )
}

export default Counters