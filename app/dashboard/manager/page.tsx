'use client'

import { useRouter } from 'next/navigation'

export default function ManagerDashboardSelection() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center p-6 space-y-8">
      <h1 className="text-2xl font-bold text-gray-800 text-center">🧑‍💼 Manager Dashboard Selector</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <DashboardButton label="Operation Dashboard" onClick={() => router.push('/dashboard/operation')} />
        <DashboardButton label="Financial Dashboard" onClick={() => router.push('/dashboard/financial')} />
        <DashboardButton label="Inventory Dashboard" onClick={() => router.push('/dashboard/inventory')} />
      </div>

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
