import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageIdx: {
    type: Number,
    required: true
  },
  times: {
    type: Number,
    required: true
  }
}, {
  minimize: false,
  timestamps: true
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

export default Exercise