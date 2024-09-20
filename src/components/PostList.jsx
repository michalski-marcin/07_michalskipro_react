import React, { Component } from 'react';
import { getPosts } from './getData'; // Ensure getPosts is a function or API URL
import { Link } from 'react-router-dom';

export default class PostList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    getPosts() // Call the function directly
      .then(data => {
        this.setState({ posts: data }); // Set the posts state with the data
      })
      .catch(error => console.error('Error fetching posts:', error));
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts.map((post, index) => (
          <div key={index} className="post-card" style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
            {/* Use Link to navigate to the post detail page */}
            <Link to={`/post/${post.id}`}>
              <h4>{post.title.rendered}</h4>
              <p>{post.excerpt.rendered}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
