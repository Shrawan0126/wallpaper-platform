import { categories } from '../data/categories'
import { wallpapers } from '../data/wallpapers'

function AdminPage() {
  const stats = [
    { label: 'Total Wallpapers', value: wallpapers.length },
    { label: 'Categories', value: categories.length },
    { label: 'Total Downloads', value: wallpapers.reduce((sum, item) => sum + item.downloads, 0).toLocaleString() },
    { label: 'Trending Count', value: wallpapers.filter((item) => item.trending).length },
  ]

  return (
    <section className="space-y-5">
      <div className="glass rounded-3xl p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-white">Admin Panel</h1>
        <p className="mt-2 text-slate-400">
          Frontend-only admin workspace for upload, edit, delete workflows and platform analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-2xl p-4">
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="glass rounded-2xl p-5">
          <h2 className="mb-3 text-xl font-semibold text-white">Upload Mock</h2>
          <p className="mb-3 text-sm text-slate-400">Dropzone and metadata form placeholder.</p>
          <button type="button" className="rounded-xl bg-accent-500 px-4 py-2 text-sm text-white">
            Upload New Wallpaper
          </button>
        </div>

        <div className="glass rounded-2xl p-5">
          <h2 className="mb-3 text-xl font-semibold text-white">Edit Queue</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            {wallpapers.slice(0, 4).map((item) => (
              <li key={item.id} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
                <span>{item.title}</span>
                <button type="button" className="text-accent-400">
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-5">
          <h2 className="mb-3 text-xl font-semibold text-white">Delete Controls</h2>
          <p className="mb-4 text-sm text-slate-400">Protected destructive action section for future role-based access.</p>
          <button type="button" className="rounded-xl bg-rose-500/70 px-4 py-2 text-sm text-white">
            Delete Selected
          </button>
        </div>
      </div>
    </section>
  )
}

export default AdminPage
