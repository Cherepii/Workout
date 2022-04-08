import {useQuery} from "react-query"
import $api from '../../../api/api'

import Header from "../../common/header/Header"
import Counters from "../../common/counters/Counters"

import bgImage from "../../../images/bg-profile.png"
import userIcon from "../../../images/icons/user.svg"
import afterImg from "../../../images/after.jpg"
import stylesLayout from "../../common/layout/Layout.module.scss"
import styles from "./Profile.module.scss"


const Profile = () => {
  const {data, isSuccess} = useQuery('list profile', 
  () => $api({
    url: '/users/profile'
  }), {
    refetchOnWindowFocus: false
  }
  )
  
  return (
    <>
      <div 
        className={`${stylesLayout.wrapper} ${stylesLayout.otherPages}`} 
        style={{backgroundImage: `url(${bgImage})`, height: 345}}>
        <Header />

        <div className={styles.userInfo}>
          <img draggable={false}src={userIcon} alt="user" height={52}/>
          {isSuccess && 
            <div className={stylesLayout.title}>{data.email}</div>
          }
        </div>

        {isSuccess && 
          <Counters data={data}/>
        }

      </div>
      <div className='wrapper'>
        <div className={styles.imagesBlock}>
          <div>
            <div className={styles.title}>До</div>
            <img draggable={false} className={styles.image} src={afterImg} alt="before" />
          </div>
          <div>
            <div className={styles.title}>После</div>
            <img draggable={false} className={styles.image} src={afterImg} alt="after" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile