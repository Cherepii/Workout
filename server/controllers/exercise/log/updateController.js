import ExerciseLog from "../../../models/exerciseLogModel.js";
import asyncHandler from "express-async-handler"
/* 
  @desc Update exercise log
  @route PUT /api/exercises/log/:id
  @access Private
*/

export const updateExerciseLog = asyncHandler(async (req, res) => {
  const {logId, timeIndex, key, value} = req.body

  const currentLog = await ExerciseLog.findById(logId)

  if(!currentLog){
    res.status(404)
    throw new Error('Данный лог не найден...')
  }

  let newTimes = currentLog.times
  
  if((!timeIndex && timeIndex !==0) || !key || (!value && value !== false)){
    res.status(404)
    throw new Error('Заполните все поля !')
  }

  newTimes[timeIndex][key] = value

  currentLog.times = newTimes
  const updatedLog = await currentLog.save()
   
  res.json(updatedLog)
})

/* 
  @desc Update completed statue for exerciseLog
  @route PUT /api/exercises/log/completed
  @access Private
*/
export const updateCompleteExerciseLog = asyncHandler(async (req, res) => {
  const { logId, status } = req.body

  const currentLog = await ExerciseLog.findById(logId).populate('exercise', 'workout')

  if(!currentLog){
    res.status(404)
    res.json('Данный лог не найден!')
  }

  if(!logId || status == undefined){
    res.status(404)
    res.json('Заполните все поля!')
  }

  currentLog.completed = status
  const updatedLog = await currentLog.save()
  res.json(updatedLog)
})