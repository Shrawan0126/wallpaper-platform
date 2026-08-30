import { useMemo, useState } from 'react'

function DownloadButton({ wallpaper }) {
  const [selected, setSelected] = useState(wallpaper.resolution)
  const [status, setStatus] = useState('idle')

  const resolutionOptions = useMemo(() => {
    const base = [wallpaper.resolution]
    if (wallpaper.width >= 3840) base.push('2560x1440', '1920x1080')
    if (wallpaper.width < 3000) base.push('1920x1080')
    return Array.from(new Set(base))
  }, [wallpaper.resolution, wallpaper.width])

  const handleDownload = () => {
    setStatus('downloading')
    const link = document.createElement('a')
    link.href = wallpaper.downloadUrl
    link.download = `${wallpaper.title.toLowerCase().replace(/\s+/g, '-')}-${selected}.${wallpaper.format.toLowerCase()}`
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => {
      setStatus('success')
      setTimeout(() => setStatus('idle'), 1800)
    }, 450)
  }

  return (
    <div className="glass rounded-2xl p-4">
      <h3 className="mb-3 text-sm font-semibold text-white">Download Options</h3>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <select
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
          className="rounded-xl border border-white/10 bg-night-800 px-3 py-2 text-sm text-white"
        >
          {resolutionOptions.map((resolution) => (
            <option key={resolution} value={resolution}>
              {resolution}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={handleDownload}
          className="rounded-xl bg-accent-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-accent-400"
        >
          {status === 'downloading' ? 'Preparing...' : status === 'success' ? 'Downloaded ✓' : 'Download'}
        </button>
      </div>
      <p className="mt-3 text-xs text-slate-400">
        {wallpaper.format} • {wallpaper.fileSize} • Original {wallpaper.resolution}
      </p>
    </div>
  )
}

export default DownloadButton
