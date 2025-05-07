'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import * as THREE from 'three'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<{ destroy: () => void } | null>(null)

  useEffect(() => {
    interface VantaWindow extends Window {
      VANTA?: {
        NET: (options: {
          el: HTMLElement;
          THREE: typeof THREE;
          mouseControls: boolean;
          touchControls: boolean;
          minHeight: number;
          minWidth: number;
          scale: number;
          scaleMobile: number;
          color: number;
          backgroundColor: number;
          points: number;
          maxDistance: number;
          spacing: number;
        }) => { destroy: () => void };
      };
    }

    if (typeof window !== 'undefined' && (window as VantaWindow).VANTA && !vantaEffect.current && vantaRef.current) {
      vantaEffect.current = (window as VantaWindow).VANTA?.NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff6b00,
        backgroundColor: 0x000000,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 15.0,
      }) || null
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy()
    }
  }, [])

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
    <div ref={vantaRef} className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-10" />
      
      <div className="z-20 bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 w-full max-w-md">
        <Image src="/logo.png" alt="TAS Logo" width={80} height={80} className="mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">TAS Login</h1>
        <h2 className="text-lg text-center text-gray-600 mb-4">INC372</h2>

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
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
            className="w-full py-3 rounded-xl text-white font-semibold bg-orange-500 hover:bg-orange-600 transition-transform transform hover:scale-105 shadow-md"
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
