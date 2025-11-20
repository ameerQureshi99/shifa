import React, { useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';
import { useTheme } from '../context/ThemeContext';
import { blogPosts } from '../data/mockData';
import { Link } from 'react-router-dom';

const Blog = () => {
    const { setTheme } = useTheme();
    useEffect(() => {
        setTheme('general');
    }, [setTheme]);

  return (
    <PageWrapper>
      <div className="bg-secondary transition-colors duration-500">
        <div className="container-custom py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
            Health Tips & Blog
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Stay informed with the latest health news, tips, and insights from our medical experts.
          </p>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="card">
                <div className="p-6">
                  <p className="text-sm text-primary font-semibold mb-2">{post.category}</p>
                  <h3 className="text-xl font-bold font-heading mb-3 hover:text-primary transition-colors">
                    <Link to="#">{post.title}</Link>
                  </h3>
                  <p className="text-text-secondary mb-4">{post.excerpt}</p>
                  <div className="text-xs text-gray-500">
                    <span>By {post.author}</span> | <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Blog;
