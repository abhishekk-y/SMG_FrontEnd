import { Zap } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-gray-100 rounded-full" />
          <div className="absolute inset-0 border-4 border-[#FF4D00] rounded-full border-t-transparent animate-spin" />
          <Zap className="w-6 h-6 text-[#FF4D00] animate-pulse" />
        </div>
        <p className="text-sm font-bold text-gray-400 tracking-widest uppercase animate-pulse">Loading</p>
      </div>
    </div>
  )
}
