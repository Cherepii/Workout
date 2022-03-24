import React, { useState } from 'react'
import Select from "react-select"

import Layout from '../../common/layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import authBg from "../../../images/bg-auth.png"
import styles from "./NewWorkout.module.scss"
import { Link } from 'react-router-dom'

const NewWorkout = () => {
  const [name, setName] = useState('')
  const [exercises, setExercises] = useState([])

  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <>
      <Layout height='356px' bgImage={authBg} heading='Create new workout'/>
      <div className={styles.wrapper}>
        <form action={handleSubmit}>
          <Field 
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder='Enter name'
          />
          <Link to={'/new-exercise'} className={styles.exerciseLabel}>Add new exercise</Link>
          <Select 
            placeholder='Exercises'
            classNamePrefix='custom-select'
            onChange={setExercises}
            value={exercises}
            isMulti={true}
            options={[
              {label: 'Push-ups', value: 'sfdsfsdf'},
              {label: 'Pull-ups', value: 'fdsfkkglds'},
              {label: 'Pull-ups', value: 'fdsfkkdsfglds'},
              {label: 'Pull-ups', value: 'fdsfdfdfkkglds'} 
            ]}
          />
          <Button text='Create' onButtonClick={() => {}}/>
        </form>
      </div>
    </>
  )
}

export default NewWorkout