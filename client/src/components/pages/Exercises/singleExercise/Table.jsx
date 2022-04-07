import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import debounce from "lodash.debounce"
import cn from "classnames"
import { useMutation } from "react-query"

import $api from "../../../../api/api"

import Alert from "../../../ui/alert/Alert"

import styles from "./SingleExercise.module.scss"

import completedImg from "../../../../images/icons/completed.svg"
import checkboxImg from "../../../../images/icons/checkbox.svg"

const Table = ({data, refetch, exId, isSuccess}) => {
  const logId = data._id;
  const navigate = useNavigate()

  const {mutate: updateLog, error} = useMutation('update times', 
  ({timeIndex, key, value}) => $api({
    url: '/exercises/log',
    type: 'PUT',
    body: {timeIndex, key, value, logId}
  }), {
    onSuccess() {
      refetch()
    }
  }
  )

  const {mutate: changeCompletedLog, error: errorCompleted} = useMutation('change log completed', 
  () => $api({
    url: '/exercises/log/completed',
    type: 'PUT',
    body: {status: true, logId}
  }), {
    onSuccess(){
      navigate(`/workouts/${data.workoutLog}`)
    }
  }
  )

  useEffect(() => {
    if(isSuccess && data.times.length === data.times.filter(el => el.completed).length &&
       data._id === exId) {
        changeCompletedLog()
    } 
  }, [data?.times, isSuccess])

  return (
    
    <div className={styles.tableWrapper}>
    {error && <Alert type="error" text='Вы не указали все поля!'/>}
    {errorCompleted && <Alert type="error" text={errorCompleted}/>}
      <div className={styles.row}>
        <div>
          <span>Previous</span>
        </div>
        <div>
          <span>Weight & repeat</span>
        </div>
        <div>
          <span>Completed</span>
        </div>
      </div>
      {data.times.map((item, idx) => (
        <div 
          key={`time ${idx}`} 
          className={cn(styles.row, {
            [styles.completed]: item.completed
          })}
        >

          <div className={`${styles.logItem} ${styles.opacity}`}>
            <span>{item.prevWeight}kg</span>
            <i>/</i>
            <span>{item.prevRepeat}</span>
          </div>

          <div className={styles.logItem}>
            <input 
              type='number' 
              disabled={item.completed}
              defaultValue={item.weight}
              onChange={debounce(e =>
                  e.target.value && updateLog({
                    key: 'weight',
                    value: e.target.value,
                    timeIndex: idx
                }), 800
              )}
            />
            <span>kg</span>
            <i>/</i>
            <input 
              type='number' 
              disabled={item.completed}
              defaultValue={item.weight}
              onChange={debounce(e =>
                  e.target.value && updateLog({
                  key: 'repeat',
                  value: e.target.value,
                  timeIndex: idx
              })
 , 800             )}
            />
          </div>

          <div className={styles.logItem}>
            <img 
              src={item.completed ? completedImg : checkboxImg} 
              alt={'checkbox'}
              onClick={() => updateLog({
                timeIndex: idx,
                key: 'completed',
                value: !item.completed
              })}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Table