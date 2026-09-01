import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="mx-auto max-w-xl text-center">
      <div className="glass rounded-3xl p-8">
        <p className="mb-2 text-sm uppercase tracking-[0.24em] text-accent-400">404</p>
        <h1 className="mb-3 text-3xl font-semibold text-white">Page Not Found</h1>
        <p className="mb-6 text-slate-400">The page you requested doesn’t exist or has been moved.</p>
        <Link to="/" className="rounded-full bg-accent-500 px-5 py-2 text-sm font-medium text-white">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
