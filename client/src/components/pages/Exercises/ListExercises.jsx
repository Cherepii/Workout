import { useQuery, useMutation } from 'react-query'

import $api from '../../../api/api'

import Layout from '../../common/layout/Layout'

import basket from "../../../images/icons/basket.svg"
import createBg from "../../../images/bg-create.png"
import styles from "../Workouts/singleWorkout/SingleWorkout.module.scss"
import Alert from '../../ui/alert/Alert'

const ListExercises = () => {

  const {data, isLoading, isFetching, isSuccess, refetch} = useQuery('get exercises list',
  () => $api({
    url: '/exercises'
  }), {
    refetchOnWindowFocus: false
  }
  )
  const {mutate: removeExercise, error, isSuccess: isSuccessRemove} = useMutation('remove exercise', 
  ({exerciseId}) => $api({
    url: 'exercises',
    type: 'DELETE',
    body: {exerciseId}
  }), {
    onSuccess(){
      refetch()
    }
  }
  )

  return (
    <>
      <Layout bgImage={createBg} heading='Удаление упражнений'/>
      <div className='wrapper'>
        <div className={styles.exercises}>
        {error && <Alert type='error' text={error}/>}
        {isSuccessRemove && <Alert text='Тренировка успешно удалена!'/>}
        {(isLoading || isFetching) ? <p>Loading...</p> : 
          isSuccess && 
            data?.map((el, idx) => (
              <div key={`workout ${idx}`} className={styles.item}>

                <button
                  className={styles.singleButton}
                  onClick={() => {}}>
                  {el.name}
                </button>

                <button 
                  className={styles.listButton} 
                  onClick={() => removeExercise({exerciseId: el._id})}>

                  <img src={basket} alt="basket" />
                </button>
              </div>
            ))
        }
        {data?.length === 0 && <Alert type='warning' text='Добавте тренировки!'/>}
        </div>
      </div>
    </>
  )
}

export default ListExercises