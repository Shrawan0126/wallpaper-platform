import { filterDefaults, sortOptions } from '../utils/wallpaperUtils'

const resolutions = ['all', '3840x2160', '3200x2000', '2160x3840', '5120x2880', '2560x1440', '3840x1920']
const orientations = ['all', 'landscape', 'portrait', 'square']
const colors = ['all', 'blue', 'purple', 'green', 'red', 'indigo', 'gray', 'white', 'black']
const dates = ['all', 'today', 'week', 'month', 'year']
const popularity = ['all', 'trending', 'featured', 'high']

function FilterPanel({ filters, onChange, onReset, categories }) {
  const renderSelect = (label, name, options) => (
    <label className="flex flex-col gap-1 text-xs uppercase tracking-wide text-slate-400">
      {label}
      <select
        value={filters[name]}
        onChange={(event) => onChange(name, event.target.value)}
        className="rounded-xl border border-white/10 bg-night-800 px-3 py-2 text-sm capitalize text-white outline-none"
      >
        {options.map((option) => (
          <option key={option.value ?? option} value={option.value ?? option}>
            {option.label ?? option}
          </option>
        ))}
      </select>
    </label>
  )

  return (
    <aside className="glass rounded-2xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-medium text-white">Filters</h3>
        <button
          type="button"
          onClick={onReset}
          className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300 hover:text-white"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
        {renderSelect('Category', 'category', [
          { value: 'all', label: 'All' },
          ...categories.map((item) => ({ value: item.slug, label: item.name })),
        ])}
        {renderSelect('Resolution', 'resolution', resolutions)}
        {renderSelect('Orientation', 'orientation', orientations)}
        {renderSelect('Color', 'color', colors)}
        {renderSelect('Date', 'date', dates)}
        {renderSelect('Popularity', 'popularity', popularity)}
        {renderSelect('Sort', 'sortBy', sortOptions)}
      </div>

      {Object.entries(filterDefaults).some(
        ([key, value]) => key !== 'sortBy' && filters[key] !== value,
      ) && <p className="mt-3 text-xs text-accent-400">Custom filters are active.</p>}
    </aside>
  )
}

export default FilterPanel
