'use client'
import { useRouter } from 'next/navigation'
import { useRef, useEffect, useState } from 'react' 

interface DashboardFrameProps {
  title: string
  icon?: string
  url: string
  refreshInterval?: number // in milliseconds (optional)
}

export default function DashboardFrame({ title, icon = '📊', url, refreshInterval = 0 }: DashboardFrameProps) {
  const router = useRouter()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    if (refreshInterval > 0) {
      const interval = setInterval(() => {
        setReloadKey((prev) => prev + 1) // change key to force reload
      }, refreshInterval)
      return () => clearInterval(interval)
    }
  }, [refreshInterval])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#fdfdfd] to-[#fff] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white/70 backdrop-blur-md shadow-2xl rounded-2xl p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          </div>
          <button
            onClick={() => router.back()}
            className="mt-4 md:mt-0 bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600 transition text-sm shadow"
          >
            ← Back to Menu
          </button>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-300 shadow-sm">
          <iframe
            key={reloadKey}
            ref={iframeRef}
            src={url}
            className="w-full h-[75vh] min-h-[400px] border-none"
            title={`${title} - Power BI`}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
