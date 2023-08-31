import Login from './Components/LoginPage'
import React, { lazy, Suspense } from 'react';
import ProfileInfo from './Components/Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const Pokemon = lazy(() => import('./Components/Account/Pokemon'));

function App() {

  return (
    <Router>
      <Suspense fallback={
        <div className="flex my-72 justify-center text-slate-700 text-7xl">Loading...</div>
      }>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homeApp" element={<Pokemon />} />
          <Route path="/profile" element={<ProfileInfo />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
