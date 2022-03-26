import React, { useState } from 'react'
import Select from "react-select"

import Layout from '../../common/layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'

import createBg from "../../../images/bg-create.png"
import styles from "./NewWorkout.module.scss"
import { Link } from 'react-router-dom'

const NewWorkout = () => {
  const [name, setName] = useState('')
  const [exercises, setExercises] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <>
      <Layout height='356px' bgImage={createBg} heading='Create new workout'/>
      <div className='wrapper'>
        <form>
          <Field 
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder='Enter name'
          />
          
          <Link to={'/new-exercise'} className={styles.exerciseLabel}>
            Add new exercise
          </Link>

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
          <Button text='Create' onButtonClick={(e) => handleSubmit(e)}/>
        </form>
      </div>
    </>
  )
}

export default NewWorkout