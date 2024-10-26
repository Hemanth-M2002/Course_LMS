import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const handleLogin =(event) =>{
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          placeholder="m@example.com"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
          </button>
        </div>
      </div>
      <button onClick={handleLogin} className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md" type="submit">Login</button>
    </form>
  )
}
