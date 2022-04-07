import Auth from "./components/pages/auth/Auth";
import Home from "./components/pages/Home/Home";
import NewWorkout from "./components/pages/Workouts/newWorkout/NewWorkout";
import SingleWorkout from "./components/pages/Workouts/singleWorkout/SingleWorkout";
import ListWorkouts from "./components/pages/Workouts/ListWorkouts";
import NewExercise from "./components/pages/Exercises/newExercise/NewExercise";
import SingleExercise from "./components/pages/Exercises/singleExercise/SingleExercise";
import UpdateExercise from "./components/pages/Exercises/UpdateExercise";
import Profile from "./components/pages/profile/Profile";

export const routes = [
  {
    path: '/',
    element: Home,
    auth: false
  },
  {
    path: '/auth',
    element: Auth,
    auth: false
  },
  {
    path: '/new-workout',
    element: NewWorkout,
    auth: true
  },
  {
    path: '/new-exercise',
    element: NewExercise,
    auth: true
  },
  {
    path: '/update-exercise',
    element: UpdateExercise,
    auth: true
  },
  {
    path: '/profile',
    element: Profile,
    auth: true
  },
  {
    path: '/workouts/:id',
    element: SingleWorkout,
    auth: true
  },
  {
    path: '/workouts',
    element: ListWorkouts,
    auth: true
  },
  {
    path: '/exercise/:id',
    element: SingleExercise,
    auth: true
  },
]