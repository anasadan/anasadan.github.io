# Blog Posts

This folder contains the blog post definitions. The actual markdown files are stored in `public/blogs/` for easy editing and GitHub Pages compatibility.

## How to Add a New Blog Post

### Step 1: Create the Markdown File

Create a new markdown file in `public/blogs/` (e.g., `post2.md`):

```markdown
---
id: 2
title: "Your Blog Post Title"
date: "2024-01-20"
excerpt: "A short description of your blog post."
---

Write your blog post content here using Markdown syntax. 
Note: Don't include the title as an H1 in the content - it's already displayed from the frontmatter.

## Adding Images

Place images in `public/images/blog/` and reference them:

![Image Description](/images/blog/your-image.jpg)

## Code Blocks

\`\`\`javascript
// Your code here
\`\`\`
```

### Step 2: Add Post Metadata

Edit `src/blogs/index.js` and add your post:

```javascript
export const blogPosts = [
  {
    id: 1,
    title: "Sample Blog Post",
    date: "2024-01-15",
    excerpt: "This is a sample blog post.",
    markdownFile: "/blogs/post1.md"
  },
  {
    id: 2,
    title: "Your New Post",
    date: "2024-01-20",
    excerpt: "Your excerpt here...",
    markdownFile: "/blogs/post2.md"  // Reference your markdown file
  },
];
```

## Adding Images

1. Place images in `public/images/blog/`
2. Reference them in markdown: `![Alt text](/images/blog/image.jpg)`

## Markdown Features Supported

- Headers (# ## ###)
- **Bold** and *italic* text
- Links: `[text](url)`
- Images: `![alt](path)`
- Code blocks with syntax highlighting
- Lists (ordered and unordered)
- Tables
- Blockquotes

## CMS Options for GitHub Pages

### Option 1: Static Markdown (Current Setup) ✅
- **Pros**: Simple, works perfectly with GitHub Pages, version controlled
- **Cons**: Manual editing, no admin UI
- **Best for**: Personal blogs, technical blogs

### Option 2: Headless CMS (Recommended for Content-Heavy Sites)
These work great with GitHub Pages:

- **Contentful** (Free tier available)
  - API-based, fetch content at build time
  - Great admin UI
  - Works with static site generators

- **Sanity** (Free tier available)
  - Real-time collaboration
  - Great developer experience
  - Can fetch on build or runtime

- **Strapi** (Self-hosted)
  - Open source
  - Full control
  - Requires hosting

### Option 3: GitHub-Based CMS
- **Forestry.io** or **Netlify CMS**
  - Edit markdown files through a web UI
  - Commits directly to your GitHub repo
  - Perfect for GitHub Pages

### Implementation Example (Headless CMS)

If you want to use a headless CMS later, you can modify `src/blogs/index.js` to fetch from an API:

```javascript
// Fetch from CMS API
const fetchPosts = async () => {
  const response = await fetch('https://your-cms-api.com/posts');
  return response.json();
};
```

## Current Setup Benefits

✅ **Works perfectly with GitHub Pages**  
✅ **Version controlled** (all posts in Git)  
✅ **Easy to write** (just markdown files)  
✅ **Supports images** (store in public folder)  
✅ **No external dependencies** (no CMS needed)  
✅ **Fast loading** (static files)
