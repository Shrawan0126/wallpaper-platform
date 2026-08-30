import { useState } from 'react'

function SearchBar({ value = '', onSearch, suggestions = [], placeholder = 'Search wallpapers...' }) {
  const [query, setQuery] = useState(value)
  const [focused, setFocused] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={submit} className="relative">
      <div className="glass flex items-center gap-2 rounded-2xl p-2">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 120)}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="rounded-xl bg-accent-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-accent-400"
        >
          Search
        </button>
      </div>

      {focused && suggestions.length > 0 && (
        <div className="glass absolute z-20 mt-2 w-full rounded-2xl p-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => {
                setQuery(suggestion)
                onSearch(suggestion)
              }}
              className="block w-full rounded-xl px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/10 hover:text-white"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </form>
  )
}

export default SearchBar
