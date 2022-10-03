import Home from "./Page/Home"
import Login from "./Page/Login"
import Signup from "./Page/Signup"
import Forgot from "./Page/Forgot"
import Navbar from "./layout/Navbar"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css"
export default function App() {

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </div>
    </Router>
  )
}

