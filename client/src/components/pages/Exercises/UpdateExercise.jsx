import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import Select from "react-select"
import cl from "classnames"
import $api from '../../../api/api'

import Layout from '../../common/layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Alert from '../../ui/alert/Alert'

import createBg from "../../../images/bg-create.png"
import styles from "./newExercise/NewExercise.module.scss"

const images = [
  'chest', 'shoulders', 'biceps', 'legs', 'hit'
]


const UpdateExercise = () => {
  const [name, setName] = useState('')
  const [times, setTimes] = useState()
  const [imageName, setImageName] = useState('chest')
  const [exercise, setExercise] = useState('')

  const {data, isSuccess: isSuccessGet} = useQuery('get exercise id', 
  () => $api({
    url: '/exercises'
  }), {
    refetchOnWindowFocus: false
  }
  )

  const {mutate: update, isLoading, isSuccess, error} = useMutation('Exercise', 
  () => $api({
    url: '/exercises',
    body: {name, times, imageName, exerciseId: exercise.value},
    type: 'PUT'
  }), {
    onSuccess() {
      setName('')
      setTimes(0)
      setImageName('chest')
      setExercise('')
    }
  }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    update()
  }

  return (
    <>
      <Layout height='356px' bgImage={createBg} heading='Update exercise'/>
      <div className='wrapper'>
        {error && <Alert type='error' text={error}/>}
        {isSuccess && isSuccessGet && <Alert text='Exercise created successfully'/>}
        {isLoading && <p>loading...</p>}
        <form onSubmit={handleSubmit}>
          <Field 
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder='Enter updated name'
          />

          <Field 
            onChange={e => setTimes(e.target.value)}
            value={times}
            placeholder='Enter updated times'
          />

          <Select 
              placeholder='Exercises'
              classNamePrefix='custom-select'
              onChange={setExercise}
              value={exercise}
              options={(isSuccessGet && data) && 
                data.map(el => ({
                  value: el._id,
                  label: el.name
                }))
              }
            />
  
          <div className={styles.images}>
            {images.map(image => (
              <img 
                draggable={false}
                key={`exercise key ${image}`}
                src={`/uploads/exercises/${image}.svg`} 
                alt="body"
                className={cl({
                  [styles.active]: imageName === image
                })}
                onClick={() => setImageName(image)}
              />
            ))}
          </div>

          <Button text='Update' />
        </form>
      </div>
    </>
  )
}

export default UpdateExercise