import Login from './Components/LoginPage'
import Pokemon from './Components/Profile/Pokemon';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homeApp" element={<Pokemon />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
