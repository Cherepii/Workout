import express from "express";
import { createWorkoutLog, getWorkoutLog, updateCompletedWorkoutLog } from "../controllers/workout/logController.js";
import { 
  createNewWork, 
  getWorkout, 
  getWorkouts, 
  removeWorkout, 
  updateWorkout } from "../controllers/workout/workoutController.js";
  
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route('/')
  .post(protect, createNewWork)
  .get(protect, getWorkouts)
  .put(protect, updateWorkout)
  .delete(protect, removeWorkout)

router.route('/log').post(protect, createWorkoutLog)
router.route('/log/completed').put(protect, updateCompletedWorkoutLog)
router.route('/:id').get(protect, getWorkout)
router.route('/log/:id').get(protect, getWorkoutLog)


export default router