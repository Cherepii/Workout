import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import { useAuth } from "./hooks/useAuth";
import NotFound from "./components/pages/404"
import { routes } from "./routes";


const App = () => {
  const {isAuth} = useAuth()
  return (
    <Router>
      <Routes>
        {routes.map(route => {  
          if(route.auth && !isAuth){
            return false
          }

          return <Route key={route.path} path={route.path} element={<route.element/>}/>
        })}
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
