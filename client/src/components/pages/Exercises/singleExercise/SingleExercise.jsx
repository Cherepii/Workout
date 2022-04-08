import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import $api from "../../../../api/api"

import Layout from "../../../common/layout/Layout"
import RenderHeading from "./RenderHeading"
import Table from "./Table"

import bgImage from "../../../../images/exercise-bg.jpg"

const SingleExercise = () => {
  const {id} = useParams();

  const { data, isLoading, refetch, isSuccess } = useQuery('get exercise log', 
  () => $api({
    url: `/exercises/log/${id}`
  }), {
    refetchOnWindowFocus: false
  }
  )

  return (
    <>
      <Layout 
        bgImage={bgImage} 
        heading={isLoading ? 'Загрузка...' :
          <RenderHeading 
            exName={data.exercise.name}
            exImage={`/uploads/exercises/${data.exercise.imageName}.svg`}
          />}
        />

      <div className="wrapper">
        {data && (
          <Table 
            isSuccess={isSuccess}
            exId={id} 
            refetch={refetch} 
            data={data}
          />
        )}
      </div>
    </>
  )
}

export default SingleExercise