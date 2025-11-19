// Blog posts index
// Define your blog posts here - each post references a markdown file in public/blogs/

export const blogPosts = [
  {
    id: 1,
    title: "Difference Array",
    date: "2025-11-11",
    excerpt: "Peforming range update efficently on an array",
    markdownFile: "/blogs/difference-array.md" // Path to markdown file in public folder
  },
  {
    id: 2,
    title: "Test post",
    date: "2025-11-11",
    excerpt: "Another blog post excerpt...",
    markdownFile: "/blogs/post2.md"
  },
];

// Helper function to get post by ID
export const getPostById = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};

// Helper function to get all posts (sorted by date, newest first)
export const getAllPosts = () => {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
};

// Load markdown content for a post
export const loadPostContent = async (markdownFile) => {
  try {
    // For GitHub Pages with HashRouter, we need to use the full URL or ensure absolute path
    // Get the current origin to build absolute URL
    const origin = window.location.origin;
    const basePath = process.env.PUBLIC_URL || '';
    
    // Build the path - ensure it starts with /
    let path = markdownFile.startsWith('/') 
      ? markdownFile 
      : `/${markdownFile}`;
    
    // Remove any double slashes (but keep // after http:)
    path = path.replace(/([^:]\/)\/+/g, '$1');
    
    // Try absolute URL first (works better with HashRouter on GitHub Pages)
    const absoluteUrl = `${origin}${basePath}${path}`;
    
    console.log('Loading markdown from:', absoluteUrl);
    console.log('PUBLIC_URL:', process.env.PUBLIC_URL);
    
    let response = await fetch(absoluteUrl, {
      cache: 'no-cache',
      headers: {
        'Accept': 'text/markdown, text/plain, */*'
      }
    });
    
    // If absolute URL fails, try relative path
    if (!response.ok) {
      console.log('Absolute URL failed, trying relative path:', path);
      response = await fetch(path, {
        cache: 'no-cache',
        headers: {
          'Accept': 'text/markdown, text/plain, */*'
        }
      });
    }
    
    if (!response.ok) {
      throw new Error(`Failed to load markdown file: ${response.status} ${response.statusText}`);
    }
    
    const text = await response.text();
    
    // Check if we got HTML instead of markdown (common error)
    if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<!doctype')) {
      console.error('Received HTML instead of markdown. Check file path:', absoluteUrl);
      console.error('Response text preview:', text.substring(0, 200));
      throw new Error('Received HTML instead of markdown file. Check that the markdown file exists in public/blogs/');
    }
    
    const parsed = parseMarkdownFrontmatter(text);
    if (!parsed || !parsed.content) {
      console.error('Failed to parse markdown frontmatter');
      console.error('Text preview:', text.substring(0, 200));
    }
    
    return parsed;
  } catch (error) {
    console.error('Error loading markdown:', error);
    console.error('Attempted path:', markdownFile);
    return null;
  }
};

// Parse frontmatter from markdown file
const parseMarkdownFrontmatter = (markdownText) => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = markdownText.match(frontmatterRegex);
  
  if (!match) {
    // If no frontmatter, return the whole text as content
    return { content: markdownText.trim() };
  }
  
  const frontmatterText = match[1];
  const content = match[2];
  
  // Parse frontmatter (simple YAML-like parser)
  const frontmatter = {};
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      frontmatter[key] = value;
    }
  });
  
  return {
    ...frontmatter,
    content: content.trim()
  };
};
