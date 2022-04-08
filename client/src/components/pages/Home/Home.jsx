import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'

import { useAuth } from '../../../hooks/useAuth'
import $api from '../../../api/api'

import Layout from '../../common/layout/Layout'
import Counters from '../../common/counters/Counters'
import Button from "../../ui/button/Button"

import mainBg from "../../../images/main-bg.jpg"
import styles from "./Home.module.scss"

const Home = () => {
  const navigate = useNavigate();
  const {isAuth} = useAuth();

  const {data, isSuccess} = useQuery('get counters', 
  () => $api({
    url: '/users/profile'
  }), {
    enabled: isAuth,
    refetchOnWindowFocus: false
  })

  

  return (
    <Layout userEmail={isSuccess && isAuth ? data.email : ''} bgImage={mainBg}>
      <div>
        <Button onButtonClick={() => isAuth ? navigate('/new-workout') : navigate('/auth')} type='main' text={isAuth ? 'Создать' : 'Войти'}/>
        <h1 className={styles.title}>Приложение для тренировок</h1>
        {isSuccess && isAuth && (
          <Counters data={data}/>
        )}
      </div>
    </Layout>
  )
}

export default Home