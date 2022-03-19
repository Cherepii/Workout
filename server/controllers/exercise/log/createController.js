import ExerciseLog from "../../../models/exerciseLogModel.js";
import asyncHandler from "express-async-handler"
/* 
  @desc Create new exerciseLog
  @route POST /api/exercises/log
  @access Private
*/
export const createExerciseLog = asyncHandler(async (req, res) => {
  const {exerciseId, times} = req.body

  let timesArr = []

  const prevExercises = await ExerciseLog
    .find({user: req.user._id, exercise: exerciseId})
    .sort('desc')

  if(prevExercises[0]){
    timesArr = prevExercises.times
  }else {
    for (let i = 0; i < times; i++) {
      timesArr.push({
        weight: 0,
        repeat: 0
      })
    }
  }
  
  const exerciseLog = await ExerciseLog.create({
    user: req.user._id,
    exercise: exerciseId,
    times: timesArr
  })

   res.json(exerciseLog)
})