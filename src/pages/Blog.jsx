import { useEffect, useState } from 'react';
import '../styles/blog.css';
import { Link } from 'react-router-dom';
import { getPosts, getCategories } from '../components/GetData';
import { motion } from 'framer-motion';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Function to strip HTML tags from a string
  const stripHtml = (html) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  // Function to truncate text to a specified limit
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  useEffect(() => {
    const fetchPostsAndCategories = async () => {
      const postData = await getPosts();
      setPosts(postData);

      // Collect unique category IDs from posts
      const categoryIds = postData.reduce((acc, post) => {
        return [...acc, ...post.categories];
      }, []);

      const uniqueCategoryIds = [...new Set(categoryIds)];
      const categoryData = await getCategories(uniqueCategoryIds);
      setCategories(categoryData);
    };

    fetchPostsAndCategories();
  }, []);

  // Handle category selection for multiple checkboxes
  const handleCategoryChange = (e) => {
    const categoryId = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedCategories((prev) => [...prev, categoryId]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((id) => id !== categoryId)
      );
    }
  };

  // Filter posts based on selected categories
  const filteredPosts =
    selectedCategories.length > 0
      ? posts.filter((post) =>
          post.categories.some((categoryId) =>
            selectedCategories.includes(categoryId)
          )
        )
      : posts;

  return (
    <div className='wrap'>
      {/* Render the category filter first */}
      <div className='category-filter'>
        {categories.length > 0 ? (
          // If categories are loaded, map through and display them
          categories.map((category) => (
            <div key={category.id}>
              <label className='category-checkbox'>
                <input
                  type='checkbox'
                  value={category.id}
                  onChange={handleCategoryChange}
                />
                <span className='category-box'>{category.name}</span>
              </label>
            </div>
          ))
        ) : (
          <p>Loading categories...</p> // Show loading state while categories are being fetched
        )}
      </div>

      {/* Render filtered posts */}
      <div className='posts'>
        {filteredPosts.length > 0 ? (
          // If there are filtered posts, map through and display them
          filteredPosts.map((post, i) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <motion.div
                className='post-card'
                key={i}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7, transition: { duration: 0.2, delay: 0 } }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.01, 
                  boxShadow: "0 3px 4px rgba(0, 0, 0, 0.1)" 
                }} 
              >
                <div className='post-card-top'>
                  <img
                    src={post.featured_media_url}
                    alt={post.title.rendered}
                  />
                  <div className='post-card-text'>
                    <h4>{stripHtml(post.title.rendered)}</h4>
                    <p>{truncateText(stripHtml(post.excerpt.rendered), 200)}</p>
                  </div>
                </div>
                <p className='post-date'>
                  {new Date(post.date).toLocaleDateString()}
                </p>
              </motion.div>
            </Link>
          ))
        ) : (
          <p>No posts available.</p> // Message when no posts are found
        )}
      </div>
    </div>
  );
}

export default Blog;
