import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"


function App(){

  return(
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
    </>
  )
    
  
}

export default App