import { useParams } from "react-router-dom"
import $api from "../../../../api/api"

import RenderHeading from "./RenderHeading"

import bgImage from "../../../../images/exercise-bg.jpg"
import Layout from "../../../common/layout/Layout"
import { useQuery } from "react-query"
import Table from "./Table"

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
        heading={isLoading ? 'loading...' :
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