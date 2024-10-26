import { useState } from 'react'
import { motion } from 'framer-motion'
import Login from './Login'
import Signup from './Signup'

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState('login')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold">Welcome to CourseHub</h1>
            <p className="text-gray-600">Login or create an account to get started</p>
          </div>

          <div className="flex justify-center mb-4">
            <button
              onClick={() => setActiveTab('login')}
              className={`w-1/2 py-2 ${activeTab === 'login' ? 'border-b-2 border-blue-500' : ''}`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`w-1/2 py-2 ${activeTab === 'signup' ? 'border-b-2 border-blue-500' : ''}`}
            >
              Sign Up
            </button>
          </div>

          {activeTab === 'login' ? <Login /> : <Signup />}
        </div>
      </motion.div>
    </div>
  )
}
