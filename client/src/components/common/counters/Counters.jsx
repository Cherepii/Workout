import React from 'react'
import styles from "./Counters.module.scss"

const Counters = ({data}) => {
  const {minutes, kgs, workouts} = data
  return (
    <div className={styles.wrapper}>
      <div className={styles.count}>
        <span className={styles.name}>Минуты</span>
        <span className={styles.value}>{minutes}</span>
      </div>
      <div className={styles.count}>
        <span className={styles.name}>Килограммы</span>
        <span className={styles.value}>{kgs}</span>
      </div>
      <div className={styles.count}>
        <span className={styles.name}>Тренировки</span>
        <span className={styles.value}>{workouts}</span>
      </div>
    </div>
  )
}

export default Counters