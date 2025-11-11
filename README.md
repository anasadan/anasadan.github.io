# Portfolio Website

A personal portfolio website built with React and deployed on GitHub Pages.

## Features

- **About Page**: Personal introduction and information
- **Blog Page**: Blog posts and articles
- **CV Page**: Curriculum vitae and professional information

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

## Customization

- Edit the content in `src/pages/About.js`, `src/pages/Blog.js`, and `src/pages/CV.js`
- Modify colors and styling in the respective CSS files
- Add your profile picture by replacing the placeholder in `About.js`
- Update navigation links in `src/components/Navigation.js`

## License

MIT

