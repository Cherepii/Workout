import ExerciseLog from "../../../models/exerciseLogModel.js";
import asyncHandler from "express-async-handler"
import { reBuildTimes } from "../../../helpers/exerciseLog.js";
/* 
  @desc Get exerciseLog
  @route GET /api/exercises/log/:id
  @access Private
*/

export const getExerciseLog = asyncHandler(async (req, res) => {
  const exerciseLog = await ExerciseLog.findById(req.params.id)
    .populate('exercise', 'name imageId')
    .lean()

  if(!exerciseLog){
    res.status(404)
    throw new Error (`Данный лог не найден!`)
  }

  const prevExerciseLogs = await ExerciseLog.find({
    user: req.user._id,
    exercise: exerciseLog._id
  })

  const prevExeLog = prevExerciseLogs[0] 
  console.log(prevExeLog)

  let newTimes

  if(prevExeLog){
    newTimes = reBuildTimes(exerciseLog, prevExeLog)
  }

  newTimes = reBuildTimes(exerciseLog)

  res.json({
    ...exerciseLog,
    times: newTimes
  })
})