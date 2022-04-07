import WorkoutLog from "../../models/workoutLogModel.js";
import ExerciseLog from "../../models/exerciseLogModel.js"
import Workout from "../../models/workoutsModel.js";
import asyncHandler from "express-async-handler"
/* 
  @desc create new workout log
  @route PUT /api/workouts/log
  @access Private
*/

export const createWorkoutLog = asyncHandler(async (req, res) => {
  const {workoutId} = req.body

  const user = req.user._id

  const workout = await Workout.findById(workoutId).populate('exercises')

  if(workout){
    const workoutLog = await WorkoutLog.create({
      user,
      workout: workoutId
    })

    const logs = workout.exercises.map(e => {
      let timesArr = []

      for (let i = 0; i < e.times; i++) {
        timesArr.push({
          weight: 0,
          repeat: 0
        })
      }

      return {
        user,
        exercise: e._id,
        times: timesArr,
        workoutLog: workoutLog._id
      }
    })

    const createExLogs = await ExerciseLog.insertMany(logs)

    const exLogsId = createExLogs.map(e => e._id)

    const foundWorkoutLog = await WorkoutLog.findById(workoutLog._id)

    foundWorkoutLog.exerciseLogs = exLogsId

    const updatedWorkoutLog = await foundWorkoutLog.save()

    res.json(updatedWorkoutLog)
  }else{
    res.status(404)
    throw new Error('Workout not found')
  }
})

/* 
  @desc get workout log
  @route GET /api/workouts/log/:id
  @access Private
*/
export const getWorkoutLog = asyncHandler(async (req, res) => {
  const workoutLog = await WorkoutLog.findById(req.params.id)
    .populate('workout')
    .populate({
      path: "exerciseLogs",
      populate: {
        path: 'exercise'
      }
    })
    .lean()

    const minutes = Math.ceil(workoutLog.workout.exercises.length * 3.7)

    res.json({
      ...workoutLog,
      minutes
    })
})

/* 
  @desc get workout log
  @route PUT /api/workouts/log/completed
  @access Private
*/
export const updateCompletedWorkoutLog = asyncHandler(async (req, res) => {
  const {logId} = req.body

  const currentLog = await WorkoutLog.findById(logId)

  if(!currentLog){
    res.status(404)
    throw new Error('Данный лог не найден')
  }

  currentLog.completed = true
  const updatedLog = await currentLog.save()

  res.json(updatedLog)
})