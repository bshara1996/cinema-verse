# 🎬🍿 Cinema Verse

Cinema Verse is a full-stack movie discovery app that lets users browse movies, view details, watch and download movies, download subtitles, and explore movie torrents through a polished React frontend backed by an Express API layer.

## ✨ Features

- 🎬 Browse a curated movie catalog with pagination.
- 🔎 Search movies by title and year.
- 📥 Watch movies, download torrents and subtitles for supported films.
- 🎭 View detailed movie information, including plot, cast, and directors.
- 💡 Explore movie suggestions.
- 📱 Responsive UI built with React and Vite.

## 🛠️ Tech Stack

### 🎨 Frontend

- Framework - React (built with Vite)
- Routing - React Router DOM
- HTTP Client - Axios for API communication
- Styling - CSS

### ⚙️ Backend

- Environment - Node.js
- Framework - Express.js
- Middleware - CORS
- Environment Variables - dotenv

## 📁 Project Structure

```text
cinema-verse/
├── backend/            # Express.js Server
│   ├── config/         # Configuration files
│   ├── controllers/    # Route handlers
│   ├── routes/         # API endpoints
│   └── server.js       # Entry point
│
└── frontend/           # React Application
    ├── src/            # Components, Pages, Services
    └── public/         # Static files
```

## 🚀 Getting Started

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) installed

### 📥 Installation

```bash
git clone https://github.com/bshara1996/cinema-verse.git
cd cinema-verse
cd backend && npm install
cd ../frontend && npm install
```

### 🔑 Environment Setup

Before running the backend, add your **SubSource API key** in `backend/config/config.js`:

```js
const SUBSOURCE_API_KEY = "your_api_key_here";
```

> ⚠️ This key is required for the subtitles feature (`/api/subtitles`) to work properly.

### ▶️ Running the Project

**Backend**

```bash
cd backend
npm run dev
```

> Runs on: **http://localhost:5000**

**Frontend**

```bash
cd frontend
npm run dev
```

> You're all set! Open your browser and navigate to **http://localhost:5173** to view the app.

## 🌐 API Overview

The backend exposes movie-related endpoints under `/api`:

- `GET /api/movies`
- `GET /api/search`
- `GET /api/movies/:id`
- `GET /api/imdb/:imdbCode`
- `GET /api/suggestions/:id`
- `GET /api/subtitles`
- `GET /api/subtitles/:id/download`

## ⚠️ Disclaimer

This site does not host or store any files on its servers. All content is provided by third-party services and external sources that are not affiliated with this project.

### 🔌 Third-Party APIs

This project uses the following external APIs and services:

- [YTS](https://yts.lt/api) — Movie metadata and torrent information
- [IMDbAPI.dev](https://imdbapi.dev/) — Movie details and ratings
- [VidSrc](https://vidsrcme.ru/) — Video streaming sources
- [SubSource](https://subsource.net/api-docs) — Subtitle data

> This project is for educational and demonstration purposes only.
