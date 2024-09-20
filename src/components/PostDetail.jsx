import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPosts } from './getData';  // Ensure getPosts is correctly defined

function PostDetail() {
  const { id } = useParams();  // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await getPosts();  // Await the posts data
        const foundPost = posts.find(p => p.id === parseInt(id));  // Find the post by ID
        if (foundPost) {
          setPost(foundPost);  // Set the post state if found
        } else {
          console.error('Post not found');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);  // Ensure loading state is turned off
      }
    };

    fetchPost();  // Call the fetch function
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className='wrap'>
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

export default PostDetail;
