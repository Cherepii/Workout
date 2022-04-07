import mongoose from "mongoose";

const {ObjectId} = mongoose.Schema

const workOutLogSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  workout: {type: ObjectId, ref: 'Workout', required: true},
  completed: {type: Boolean, default: false},
  exerciseLogs: [{
    type: ObjectId,
    ref: 'ExerciseLog'
  }]
}, {
  minimize: false,
  timestamps: true
})

const WorkoutLog = mongoose.model('WorkoutLog', workOutLogSchema)

export default WorkoutLog