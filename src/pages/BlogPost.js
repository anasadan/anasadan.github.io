import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostById, loadPostContent } from '../blogs';
import './BlogPost.css';

function BlogPost() {
  const { id } = useParams();
  const post = getPostById(id);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (post && post.markdownFile) {
      loadPostContent(post.markdownFile)
        .then((data) => {
          if (data && data.content) {
            setContent(data.content);
          } else {
            console.error('No content found in markdown file');
            setError('Failed to load post content. Check browser console for details.');
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error loading post:', err);
          setError(`Error loading post: ${err.message}`);
          setLoading(false);
        });
    } else if (post && post.content) {
      // Fallback for old format (content in JS)
      setContent(post.content);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="blog-post-page">
        <h1 className="page-title">Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="blog-post-page">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-post-page">
        <h1 className="page-title">Error</h1>
        <p>{error}</p>
        <Link to="/blog" className="back-link">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post-page">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <article className="blog-post-article">
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-content">
          {content && !content.trim().startsWith('<!DOCTYPE') && !content.trim().startsWith('<!doctype') ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          ) : (
            <div>
              <p style={{ color: '#ff4444' }}>Error: Could not load blog post content.</p>
              <p>Please check:</p>
              <ul>
                <li>That the markdown file exists in public/blogs/</li>
                <li>That the file path in src/blogs/index.js is correct</li>
                <li>Check the browser console for detailed error messages</li>
              </ul>
              {content && (
                <details style={{ marginTop: '1rem' }}>
                  <summary>Debug Info (Click to expand)</summary>
                  <pre style={{ 
                    background: '#1a1a1a', 
                    padding: '1rem', 
                    overflow: 'auto',
                    fontSize: '0.8rem'
                  }}>
                    {content.substring(0, 500)}
                  </pre>
                </details>
              )}
            </div>
          )}
        </div>
        <p className="blog-post-date">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </article>
    </div>
  );
}

export default BlogPost;
