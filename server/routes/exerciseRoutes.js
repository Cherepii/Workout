import express from "express";
import { createExerciseLog } from "../controllers/exercise/log/createController.js"
import { getExerciseLog } from "../controllers/exercise/log/getController.js";
import { updateExerciseLog, updateCompleteExerciseLog } from "../controllers/exercise/log/updateController.js";

import {
  createNewExercise, 
  getExercises, 
  removeExercise, 
  updateExercise} from "../controllers/exercise/mainController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route('/')
  .post(protect, createNewExercise)
  .get(protect, getExercises)
  .put(protect, updateExercise)
  .delete(protect, removeExercise)

router.route('/log')
  .post(protect, createExerciseLog)
  .put(protect, updateExerciseLog)

router.route('/log/completed').put(protect, updateCompleteExerciseLog)

router.route('/log/:id').get(protect, getExerciseLog)

export default router