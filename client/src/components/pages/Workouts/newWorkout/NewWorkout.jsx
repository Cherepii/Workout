import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'
import Select from "react-select"
import $api from '../../../../api/api'

import Layout from '../../../common/layout/Layout'

import Button from '../../../ui/button/Button'
import Field from '../../../ui/field/Field'
import Alert from '../../../ui/alert/Alert'

import createBg from "../../../../images/bg-create.png"
import styles from "./NewWorkout.module.scss"

const NewWorkout = () => {
  const [name, setName] = useState('')
  const [exercises, setExercises] = useState([])

  const {data, isSuccess} = useQuery('list exercises', 
  () => $api({
    url: '/exercises'
  }), {
    refetchOnWindowFocus: false
  })

  const {mutate, isLoading, isSuccess: isSuccessMutate, error} = useMutation('create workout',
  ({exIds}) => $api({
    type: 'POST',
    url: '/workouts',
    body: {name, exercisesId: exIds}
  }), {
    onSuccess() {
      setName('')
      setExercises([])
    }
  }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const exIds = exercises.map(el => el.value)
    mutate({
      exIds
    })
  }

  return (
    <>
      <Layout height='356px' bgImage={createBg} heading='Create new workout'/>
      <div className='wrapper' style={{maxWidth: 340}}>
        {error && <Alert type='error' text={error}/>}
        {isSuccessMutate && <Alert text='Workout created successfully!'/>}
        {isLoading && <p>Loading...</p>}
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
              options={(isSuccess && data) && 
                data.map(el => ({
                  value: el._id,
                  label: el.name
                }))
              }
            />
          
          <Button text='Create' onButtonClick={(e) => handleSubmit(e)}/>
        </form>
      </div>
    </>
  )
}

export default NewWorkout