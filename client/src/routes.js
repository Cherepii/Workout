import Auth from "./components/pages/auth/Auth";
import Home from "./components/pages/Home/Home";
import NewWorkout from "./components/pages/newWorkout/NewWorkout";
import NewExercise from "./components/pages/newExercise/NewExercise";

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
]