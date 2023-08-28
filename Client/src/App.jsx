import Login from './Components/LoginPage'
import Pokemon from './Components/Account/Pokemon';
import Navigation from './Components/NavBar/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homeApp" element={<Pokemon />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
