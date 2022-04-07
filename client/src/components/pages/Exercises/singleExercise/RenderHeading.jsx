import styles from "./SingleExercise.module.scss"

const RenderHeading = ({exImage, exName}) => {
  return (
    <div className={styles.heading}>
      <img width={34} height={34} src={exImage} alt=''/>
      <span>{exName}</span>
    </div>
  )
}

export default RenderHeading