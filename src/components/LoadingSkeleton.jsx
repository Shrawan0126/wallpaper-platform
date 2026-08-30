function LoadingSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="glass animate-pulse rounded-2xl p-4">
          <div className="mb-4 h-44 rounded-xl bg-white/10" />
          <div className="mb-2 h-5 rounded bg-white/10" />
          <div className="h-4 w-2/3 rounded bg-white/10" />
        </div>
      ))}
    </div>
  )
}

export default LoadingSkeleton
