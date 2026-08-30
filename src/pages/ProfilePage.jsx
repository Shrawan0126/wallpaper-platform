import { wallpapers } from '../data/wallpapers'
import { useFavorites } from '../hooks/useFavorites'

function ProfilePage() {
  const { favoriteIds } = useFavorites()

  const stats = [
    { label: 'Favorites', value: favoriteIds.length },
    { label: 'Available Wallpapers', value: wallpapers.length },
    { label: 'Downloads Today', value: 12 },
    { label: 'Profile Completeness', value: '78%' },
  ]

  return (
    <section className="space-y-5">
      <div className="glass rounded-3xl p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-white">Profile</h1>
        <p className="mt-2 text-slate-400">Frontend profile dashboard ready for future user data integration.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass rounded-2xl p-4">
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-5">
        <h2 className="text-xl font-semibold text-white">Account Settings (Mock)</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          <li>• Change avatar</li>
          <li>• Manage notification preferences</li>
          <li>• Connect cloud sync for favorites</li>
        </ul>
      </div>
    </section>
  )
}

export default ProfilePage
