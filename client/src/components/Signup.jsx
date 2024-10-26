import { useState } from 'react'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword)


  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input
          id="name"
          placeholder="John Doe"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="signup-email"
          type="email"
          placeholder="m@example.com"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">Password</label>
        <div className="relative">
          <input
            id="signup-password"
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
      <button className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md" type="submit">Sign Up</button>
    </form>
  )
}