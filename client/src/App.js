import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthForm from './components/AuthForm'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import CoursesPage from './components/CoursesPage'
import CourseCreation from './components/CourseCreation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} /> {/* Main auth form with tabs */}
        <Route path="/login" element={<Login />} /> {/* Direct login page */}
        <Route path="/signup" element={<Signup />} /> {/* Direct signup page */}
        <Route path = '/dashboard' element = {<Dashboard/>}></Route>
        <Route path = '/course' element = {<CoursesPage/>}></Route>
        <Route path = '/course/create' element = {<CourseCreation/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
