import asyncHandler from "express-async-handler"
import Exercise from "../../models/exerciseModel.js"

/* 
  @desc Create new exercise
  @route POST /api/exercises
  @access Private
*/
export const createNewExercise = asyncHandler(async (req, res) => {
  const {name, times, imageName} = req.body

  const exercise = await Exercise.create({
    name,
    times, 
    imageName
  })

  res.json(exercise)
})

/* 
  @desc update exercise
  @route PUT /api/exercises
  @access Private
*/
export const updateExercise = asyncHandler(async (req, res) => {
  const { exerciseId, name, imageName, times } = req.body

  const currentExercise = await Exercise.findById(exerciseId)

  if(!currentExercise){
    res.status(404)
    res.json('Данное упражнение не найдено!')
  }

  if(!exerciseId || !name || !imageName || !times){
    res.status(404)
    res.json('Заполните все поля!')
  }

  currentExercise.name = name,
  currentExercise.imageName = imageName
  currentExercise.times = times

  const updatedExercise = await currentExercise.save()
  res.json(updatedExercise)
})

/* 
  @desc remove exercise
  @route DELETE /api/exercises
  @access Private
*/
export const removeExercise = asyncHandler(async (req, res) => {
  const { exerciseId } = req.body

  const exercise = await Exercise.findById(exerciseId)

  if(!exercise){
    res.status(404)
    res.json('Данное упражнение не найдено!')
  }

  await exercise.remove()

  res.json({message: 'Exercise has been removed!'})
})

/* 
  @desc get exercises
  @route GET /api/exercises
  @access Private
*/
export const getExercises = asyncHandler(async (req, res) => {
  const exercises = await Exercise.find({})

  res.json(exercises)
})