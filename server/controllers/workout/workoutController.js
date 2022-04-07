import asyncHandler from "express-async-handler"
import Workout from "../../models/workoutsModel.js"

/* 
  @desc Create new work
  @route POST /api/workouts
  @access Private
*/
export const createNewWork = asyncHandler(async (req, res) => {
  const {name, exercisesId} = req.body

  const workout = await Workout.create({
    name,
    exercises: exercisesId
  })

  res.json(workout)
})

/* 
  @desc get workout
  @route POST /api/workouts/:id
  @access Private
*/
export const getWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id)
    .populate('exercises')
    .lean()

  const minutes = Math.ceil(workout.exercises.length * 3.7)

  res.json({...workout, minutes})
})

/* 
  @desc get workouts
  @route POST /api/workouts
  @access Private
*/
export const getWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workout.find({}).populate('exercises')

  res.json(workouts)
})

/* 
  @desc updated workout
  @route PUT /api/workouts
  @access Private
*/
export const updateWorkout = asyncHandler(async (req, res) => {
  const {name, exercisesId, workoutId} = req.body

  const currentWorkout = await Workout.findById(workoutId)

  if(!currentWorkout){
    res.status(404)
    throw new Error('Данная тренировка не найдена!')
  }

  currentWorkout.name = name
  currentWorkout.exercises = exercisesId

  const updatedWorkout = await currentWorkout.save()

  res.json(updatedWorkout)
})

/* 
  @desc remove workout
  @route DELETE /api/workouts
  @access Private
*/
export const removeWorkout = asyncHandler(async (req, res) => {
  const { workoutId } = req.body

  const workout = await Workout.findById(workoutId)

  if(!workout){
    res.status(404)
    throw new Error('Данная тренировка не найдена!')
  }

  await workout.remove()

  res.json({message: 'Workout has been removed!'})
})