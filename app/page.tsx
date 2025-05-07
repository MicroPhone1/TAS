'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    setError('')
    if (!email || !password) return setError('Please fill all fields.')
    if (password !== 'INC372') return setError('Wrong password.')

    if (email.includes('manager')) {
      router.push('/dashboard/manager')
    } else if (email.includes('operator')) {
      router.push('/dashboard/operator')
    } else {
      setError('User role not recognized.')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdfbfb] via-[#f6f6f6] to-[#eaeaea] px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 p-8 w-full max-w-md">
        <img src="/logo.png" alt="TAS Logo" className="w-20 h-20 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">TAS Login</h1>
        <h2 className="text-lg text-center text-gray-600 mb-4">
          INC372 <br />
        </h2>
        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm text-center">
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl text-white font-semibold bg-orange-500 hover:bg-black-600 transition-transform transform hover:scale-105 shadow-md"
          >
            Log In
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Test login: <strong>manager@tas.com</strong> / <strong>operator@tas.com</strong><br />
          Password: <strong>INC372</strong>
        </p>
      </div>
    </div>
  )
}
