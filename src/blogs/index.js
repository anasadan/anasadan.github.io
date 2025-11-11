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
  // Add more posts here:
  // {
  //   id: 2,
  //   title: "Another Post",
  //   date: "2024-01-20",
  //   excerpt: "Another blog post excerpt...",
  //   markdownFile: "/blogs/post2.md"
  // },
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
    // Ensure the path starts with / for absolute path from public folder
    // Use process.env.PUBLIC_URL for GitHub Pages compatibility
    const basePath = process.env.PUBLIC_URL || '';
    const path = markdownFile.startsWith('/') 
      ? `${basePath}${markdownFile}` 
      : `${basePath}/${markdownFile}`;
    
    console.log('Loading markdown from:', path);
    const response = await fetch(path);
    
    if (!response.ok) {
      throw new Error(`Failed to load markdown file: ${response.status} ${response.statusText}`);
    }
    
    const text = await response.text();
    
    // Check if we got HTML instead of markdown (common error)
    if (text.trim().startsWith('<!DOCTYPE') || text.trim().startsWith('<!doctype')) {
      console.error('Received HTML instead of markdown. Check file path:', path);
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
