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
        <div key={post.id} className='post'>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title.rendered}</h2>
          </Link>
          <p>{post.excerpt.rendered}</p>
        </div>
      ))}
     </div>
      
    </div>
  );
}
export default Blog;
