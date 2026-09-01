# VelvetWall - Premium Wallpaper Platform

A complete responsive premium wallpaper web app built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **React Router**.

## Features

- Dark premium UI with glassmorphism, rounded cards, and smooth animations
- Fully responsive layout for mobile, tablet, and desktop
- Pages:
  - Home
  - Categories
  - Category
  - Search
  - Wallpaper Details
  - Favorites
  - Login
  - Register
  - Profile
  - Admin
  - 404 Not Found
- Reusable components:
  - Navbar
  - Footer
  - HeroSection
  - SearchBar
  - WallpaperCard
  - WallpaperGrid
  - CategoryCard
  - FilterPanel
  - DownloadButton
  - LoadingSkeleton
- Realistic sample data with rich wallpaper metadata fields
- Search by title, category, tags, description, and keywords
- Live search suggestions
- Filtering by category, resolution, orientation, color, date, and popularity
- Sorting by latest, most downloaded, most liked, trending, and A-Z
- Favorites persisted via localStorage
- Wallpaper details with related/similar content
- Download UX with resolution selector and success state
- Admin mock UI structure for upload/edit/delete/statistics
- Auth-ready login/register/profile frontend structure (no backend)

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Router DOM

## Project Structure

```text
src/
  assets/
  components/
    CategoryCard.jsx
    DownloadButton.jsx
    FilterPanel.jsx
    Footer.jsx
    HeroSection.jsx
    LoadingSkeleton.jsx
    Navbar.jsx
    SearchBar.jsx
    WallpaperCard.jsx
    WallpaperGrid.jsx
  data/
    categories.js
    wallpapers.js
  hooks/
    useFavorites.js
    useSearchSuggestions.js
    useWallpaperFilters.js
  pages/
    AdminPage.jsx
    CategoriesPage.jsx
    CategoryPage.jsx
    FavoritesPage.jsx
    HomePage.jsx
    LoginPage.jsx
    NotFoundPage.jsx
    ProfilePage.jsx
    RegisterPage.jsx
    SearchPage.jsx
    WallpaperDetailsPage.jsx
  utils/
    wallpaperUtils.js
  App.jsx
  index.css
  main.jsx
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```
