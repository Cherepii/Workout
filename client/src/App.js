import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home/Home";
import NewWorkout from "./components/pages/newWorkout/NewWorkout";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/new-workout" element={<NewWorkout />}/>
    </Routes>
    </Router>
  );
}

export default App;
