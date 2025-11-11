# Anas Adan - Portfolio Website

My personal portfolio website built with React and deployed on GitHub Pages.

Live at: [anasadan.github.io](https://anasadan.github.io)

## Features

- **About Page**: Personal introduction and information
- **Blog Page**: Blog posts and articles written in Markdown
- **CV Page**: Curriculum vitae (opens PDF in new tab)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

## Deployment to GitHub Pages

### Important: Repository Setup

For the site to be available at `anasadan.github.io`, your repository must be named `anasadan.github.io`.

1. **Create/rename your repository** on GitHub to `anasadan.github.io`

2. **Configure GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to `gh-pages` branch
   - Save

3. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

This will:
- Build your React app
- Create/update the `gh-pages` branch
- Deploy your site to `https://anasadan.github.io`

4. **Wait a few minutes** for GitHub Pages to update, then visit `https://anasadan.github.io`

### Note
The `homepage` field in `package.json` is already set to `https://anasadan.github.io` for your user site.

## Tech Stack

- React
- React Router (HashRouter for GitHub Pages compatibility)
- React Markdown for blog posts
- GitHub Pages for hosting

## License

MIT

