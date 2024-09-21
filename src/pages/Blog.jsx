// import '../styles/page.css';
import React, { useEffect, useState } from 'react';

import '../styles/blog.css';

import { FadeIn } from '../components/Animations';
import { motion } from 'framer-motion';
import PostList from '../components/PostList';
import { Link } from 'react-router-dom';
import { getPosts } from '../components/getData';

function Blog() {
  const [posts, setPosts] = useState([]);

  const stripHtml = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getPosts(); // Fetch posts using the getPosts function
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className='wrap'>
      <div className='posts'>
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <div
              className='post-card'>
              
                {/* Display the image on top of the card */}
                <div className='post-card-top'>
                <img
                  src={post.featured_media_url}
                  alt={post.title.rendered}
                />
                <div className='post-card-text'>
                 
                    <h4>{post.title.rendered}</h4>
                    <p>{truncateText(stripHtml(post.excerpt.rendered), 200)}</p>
                  </div>
                  </div>
                  <p className='post-date'>
                    {new Date(post.date).toLocaleDateString()}
                  </p>{' '}
                  {/* Display the date */}
                
           
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Blog;
