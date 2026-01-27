'use client'

export default function MainValueItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gradient-to-br from-[#3F79FF] to-[#3F79FF]/70 rounded-2xl shadow-lg relative flex items-center justify-center min-h-[160px]">
      <div className="text-white/80 text-sm font-medium absolute top-4 left-4">{label}</div>
      <div className="text-white text-4xl font-medium mt-6">{value}</div>
    </div>
  )
}
