import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPosts } from './getData';  // Ensure getPosts is correctly defined
import '../styles/blog.css';
import '../styles/post.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-java';
import 'prismjs/themes/prism.css'; // Prism theme for syntax highlighting

function PostDetail() {
  const { id } = useParams();  // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await getPosts();  // Await the posts data
        const foundPost = posts.find(p => p.id === parseInt(id)); 
        console.log(posts); // Find the post by ID
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

  // Apply PrismJS syntax highlighting after the post content is loaded
  useEffect(() => {
    if (post) {
      Prism.highlightAll();  // Apply syntax highlighting
    }
  }, [post]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className='wrap post-wrap'>
      {/* Link back to the posts list */}
      <Link to='/blog' className='back-link'>← Back to Posts</Link>

      {/* Display the featured image if available */}
      {post.featured_media_url && <img src={post.featured_media_url} alt={post.title.rendered} className='featured-image' />}

      <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      {/* Display content while keeping HTML tags intact */}
      <div className='post-content' dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

      {/* Link back to the posts list at the bottom */}
      <Link to='/blog' className='back-link'>← Back to Posts</Link>
    </div>
  );
}

export default PostDetail;
