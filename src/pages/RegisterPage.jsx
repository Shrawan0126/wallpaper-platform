import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <section className="mx-auto max-w-md">
      <div className="glass rounded-3xl p-6 sm:p-8">
        <h1 className="mb-2 text-3xl font-semibold text-white">Create Account</h1>
        <p className="mb-6 text-sm text-slate-400">Register UI scaffolded for future API authentication.</p>

        <form className="space-y-4">
          <label className="block text-sm text-slate-300">
            Full Name
            <input
              type="text"
              className="mt-1 w-full rounded-xl border border-white/10 bg-night-800 px-3 py-2 text-white outline-none"
            />
          </label>

          <label className="block text-sm text-slate-300">
            Email
            <input
              type="email"
              className="mt-1 w-full rounded-xl border border-white/10 bg-night-800 px-3 py-2 text-white outline-none"
            />
          </label>

          <label className="block text-sm text-slate-300">
            Password
            <input
              type="password"
              className="mt-1 w-full rounded-xl border border-white/10 bg-night-800 px-3 py-2 text-white outline-none"
            />
          </label>

          <button type="button" className="w-full rounded-xl bg-accent-500 px-4 py-2 font-medium text-white">
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="text-accent-400">
            Login
          </Link>
        </p>
      </div>
    </section>
  )
}

export default RegisterPage
