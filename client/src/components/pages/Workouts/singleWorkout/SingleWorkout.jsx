import { Fragment, useEffect } from "react"
import { useQuery, useMutation } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import cn from "classnames"
import $api from '../../../../api/api'

import Header from "../../../common/header/Header"
import stylesLayout from "../../../common/layout/Layout.module.scss"
import Alert from "../../../ui/alert/Alert"

import bgImage from "../../../../images/bg-profile.png"

import styles from "./SingleWorkout.module.scss"


const SingleWorkout = () => {
  const {id} = useParams();
  const navigate = useNavigate()

  const {data, isSuccess, isLoading, isFetching} = useQuery('get single workout', 
  () => $api({
    url: `/workouts/log/${id}`
  }), {
    refetchOnWindowFocus: false
  })

  const {mutate: setCompleted, error} = useMutation('Set completed workout', 
  () => $api({
    url: '/workouts/log/completed',
    type: 'PUT',
    body: {logId: id}
  }), {
    onSuccess(){
      navigate('/workouts')
    }
  }
  )

  useEffect(() => {
    if(isSuccess && 
       data?.exerciseLogs &&
       data.exerciseLogs.length === data.exerciseLogs.filter(el => el.completed).length &&
       data._id === id) {
        setCompleted()
       }
  }, [data?.exerciseLogs])
  
  return (
    <>
      <div 
        className={`${stylesLayout.wrapper} ${stylesLayout.otherPages}`} 
        style={{backgroundImage: `url(${bgImage})`, height: 365}}>
        <Header />

        <div className={styles.titleBlock}>
          {isSuccess && <time className={styles.time}>{data.minutes} min</time>}
          <h1 className={stylesLayout.title}>EXERCISES FOR THE SHOULDERS</h1>
        </div>
      </div>
      <div className='wrapper'>
        <div className={styles.exercises}>
          {isLoading || isFetching ? <p>Loading...</p> : 
          <>
            {isSuccess && 
              data.exerciseLogs.map((el, idx) => {
                return (
                  <Fragment key={idx}>
                    <div className={cn(styles.item, {
                      [styles.completed]: el.completed
                    })}>
                      <button className={styles.singleButton} onClick={() => navigate(`/exercise/${el._id}`)}>
                        {el.exercise.name}
                        <img 
                          draggable={false} 
                          src={`/uploads/exercises/${el.exercise.imageName}.svg`} 
                          alt="icon" 
                        />
                      </button>
                    </div>
                    {idx % 2 !== 0 ? <div className={styles.line}></div>: null}
                  </Fragment>
                )
              })
            }
          </>
          }
        </div>
      </div>
    </>
  )
}

export default SingleWorkout
