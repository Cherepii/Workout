import mongoose from "mongoose";

const {ObjectId} = mongoose.Schema

const workOutLogSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  workout: {type: ObjectId, ref: 'Workout', required: true},
  completed: {type: Boolean, default: true},
  exerciseLogs: [{
    type: ObjectId,
    ref: 'ExercisesLog'
  }]
}, {
  minimize: false,
  timestamps: true
})

const WorkoutLog = mongoose.model('WorkoutLog', workOutLogSchema)

export default WorkoutLog