import React from 'react'
import { useNavigate } from 'react-router-dom'

import Layout from '../../common/layout/Layout'
import styles from "./Home.module.scss"
import Button from "../../ui/button/Button"
import mainBg from "../../../images/main-bg.jpg"
import Counters from '../../common/counters/Counters'

const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout bgImage={mainBg}>
      <div>
        <Button onButtonClick={() => navigate('/new-workout')} type='main' text='New'/>
        <h1 className={styles.title}>EXERCISES FOR THE SHOULDERS</h1>
        <Counters />
      </div>
    </Layout>
  )
}

export default Home