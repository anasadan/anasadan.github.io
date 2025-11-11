import React from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../blogs';
import './Blog.css';

function Blog() {
  const posts = getAllPosts();

  return (
    <div className="blog-page">
      <h1 className="page-title">Blog</h1>
      <div className="blog-content">
        {posts.length === 0 ? (
          <p className="coming-soon">Coming soon...</p>
        ) : (
          <div className="blog-posts">
            {posts.map((post) => (
              <article key={post.id} className="blog-post">
                <Link to={`/blog/${post.id}`} className="blog-post-title">
                  {post.title}
                </Link>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <p className="blog-post-date">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
