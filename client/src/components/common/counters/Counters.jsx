import React from 'react'
import styles from "./Counters.module.scss"

const data = {
  minutes: 7,
	kgs: 50,
	workouts: 1
}

const Counters = () => {
  return (
    <div className={styles.wrapper}>
      {Object.entries(data).map((i, idx) => (
        <div className={styles.count} key={idx}>
          <span className={styles.name}>{i[0]}</span>
          <span className={styles.value}>{i[1]}</span>
        </div>
      ))}
    </div>
  )
}

export default Counters