import {useQuery, useMutation} from "react-query"
import $api from '../../../api/api'

import Layout from "../../common/layout/Layout"
import Alert from "../../ui/alert/Alert"

import bgImage from "../../../images/bg-profile.png"
import basket from "../../../images/icons/basket.svg"

import styles from "./singleWorkout/SingleWorkout.module.scss"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"


const ListWorkouts = () => {
  const navigate = useNavigate();

  const {data, isSuccess, isFetching,  refetch} = useQuery('list workouts', 
  () => $api({
    url: `/workouts`
  }), {
    refetchOnWindowFocus: false
  })

  const {mutate: createWorkoutLog, isSuccess: isSuccessLog, error: logError} = useMutation('create workout log', 
  ({workId}) => $api({
    type: 'POST',
    url: '/workouts/log',
    body: {workoutId: workId}
  }), {
    onSuccess(data){
      navigate(`/workouts/${data._id}`)
    }
  }
  )

  const {mutate: removeWorkout, isSuccess: isSuccessRemove, error, isLoading} = useMutation('remove workout', 
    ({workoutId}) => $api({
      type: 'DELETE',
      url: '/workouts',
      body: {workoutId}
    })
  )

  useEffect(() => refetch, [isSuccessRemove, refetch])

  const handleRemove = (id) => {
    removeWorkout({workoutId: id})
  }
  
  return (
    <>
      <Layout bgImage={bgImage} heading='Your Workouts'/>
      <div className='wrapper'>
          <div className={styles.exercises}>
            {error && <Alert type="error" text={error}/>}
            {logError && <Alert type="error" text={logError}/>}
            {isSuccessRemove && <Alert text='Тренировка успешно удалена!'/>}
            {isSuccessLog && <Alert text='Запись успешно создана!'/>}

            {(isLoading || isFetching) && <p>Loading...</p>}

            {isSuccess && !isFetching && (
              data?.map((el, idx) => {
                return (
                  <div key={`workout ${idx}`} className={styles.item}>

                    <button
                      className={styles.singleButton}
                      onClick={() => createWorkoutLog({
                        workId: el._id
                      })}>
                      {el.name}
                    </button>

                    <button className={styles.listButton} onClick={() => handleRemove(el._id)}>
                      <img src={basket} alt="basket" />
                    </button>
                  </div>
                )
              })

            )}
              {isSuccess && data?.length === 0 && <Alert type="warning" text='Тренировки не найдены!'/>}
          </div>
      </div>
    </>
  )
}

export default ListWorkouts