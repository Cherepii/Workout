import Auth from "./components/pages/auth/Auth";
import Home from "./components/pages/Home/Home";
import NewWorkout from "./components/pages/newWorkout/NewWorkout";

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
]