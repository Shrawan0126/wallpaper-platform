export const sortOptions = [
  { value: 'latest', label: 'Latest' },
  { value: 'downloads', label: 'Most Downloaded' },
  { value: 'likes', label: 'Most Liked' },
  { value: 'trending', label: 'Trending' },
  { value: 'az', label: 'A → Z' },
]

export const filterDefaults = {
  category: 'all',
  resolution: 'all',
  orientation: 'all',
  color: 'all',
  date: 'all',
  popularity: 'all',
  sortBy: 'latest',
}

export const getOrientation = (width, height) => {
  if (width === height) return 'square'
  return width > height ? 'landscape' : 'portrait'
}

const dateThresholds = {
  today: 1,
  week: 7,
  month: 30,
  year: 365,
}

const isInDateRange = (createdAt, selectedDate) => {
  if (selectedDate === 'all') return true
  const days = dateThresholds[selectedDate]
  if (!days) return true
  const createdTime = new Date(createdAt).getTime()
  const now = Date.now()
  const limit = now - days * 24 * 60 * 60 * 1000
  return createdTime >= limit
}

const matchesResolution = (resolution, selectedResolution) => {
  if (selectedResolution === 'all') return true
  return resolution === selectedResolution
}

const matchesPopularity = (wallpaper, popularity) => {
  if (popularity === 'all') return true
  if (popularity === 'trending') return wallpaper.trending
  if (popularity === 'featured') return wallpaper.featured
  if (popularity === 'high') return wallpaper.downloads >= 10000
  return true
}

export const filterWallpapers = (wallpapers, filters, query = '') => {
  const searchTerm = query.trim().toLowerCase()

  return wallpapers.filter((wallpaper) => {
    const matchesSearch =
      !searchTerm ||
      wallpaper.title.toLowerCase().includes(searchTerm) ||
      wallpaper.category.toLowerCase().includes(searchTerm) ||
      wallpaper.description.toLowerCase().includes(searchTerm) ||
      wallpaper.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
      wallpaper.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm))

    const orientation = getOrientation(wallpaper.width, wallpaper.height)

    return (
      matchesSearch &&
      (filters.category === 'all' || wallpaper.category === filters.category) &&
      matchesResolution(wallpaper.resolution, filters.resolution) &&
      (filters.orientation === 'all' || orientation === filters.orientation) &&
      (filters.color === 'all' || wallpaper.dominantColor === filters.color) &&
      isInDateRange(wallpaper.createdAt, filters.date) &&
      matchesPopularity(wallpaper, filters.popularity)
    )
  })
}

export const sortWallpapers = (wallpapers, sortBy) => {
  const sorted = [...wallpapers]

  switch (sortBy) {
    case 'downloads':
      return sorted.sort((a, b) => b.downloads - a.downloads)
    case 'likes':
      return sorted.sort((a, b) => b.likes - a.likes)
    case 'trending':
      return sorted.sort((a, b) => Number(b.trending) - Number(a.trending) || b.likes - a.likes)
    case 'az':
      return sorted.sort((a, b) => a.title.localeCompare(b.title))
    case 'latest':
    default:
      return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }
}

export const buildSuggestions = (wallpapers, categories, query) => {
  const input = query.trim().toLowerCase()
  if (!input) return []

  const source = new Set()

  categories.forEach((category) => source.add(category.name))

  wallpapers.forEach((wallpaper) => {
    source.add(wallpaper.title)
    wallpaper.tags.forEach((tag) => source.add(tag))
    wallpaper.keywords.forEach((keyword) => source.add(keyword))
  })

  return Array.from(source)
    .filter((item) => item.toLowerCase().includes(input))
    .slice(0, 8)
}

export const getRelatedWallpapers = (wallpaper, wallpapers) => {
  return wallpapers
    .filter((item) => item.id !== wallpaper.id)
    .sort((a, b) => {
      const scoreA = Number(a.category === wallpaper.category) + a.tags.filter((tag) => wallpaper.tags.includes(tag)).length
      const scoreB = Number(b.category === wallpaper.category) + b.tags.filter((tag) => wallpaper.tags.includes(tag)).length
      return scoreB - scoreA
    })
    .slice(0, 6)
}
