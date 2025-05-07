'use client'

import { useRouter } from 'next/navigation'

export default function OperatorDashboardSelection() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 flex flex-col items-center justify-center p-6 space-y-8">
      <h1 className="text-2xl font-bold text-gray-800 text-center">👷 Operator Dashboard</h1>

      <DashboardButton label="Operation Dashboard" onClick={() => router.push('/dashboard/operation')} />

      <button
        onClick={() => router.push('/')}
        className="text-sm text-gray-500 hover:underline"
      >
        ← Back to Login
      </button>
    </div>
  )
}

function DashboardButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-300 rounded-xl p-6 shadow hover:shadow-md hover:bg-gray-50 transition text-gray-700 font-medium"
    >
      {label}
    </button>
  )
}
