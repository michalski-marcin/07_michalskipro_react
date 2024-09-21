const appUrl = "http://blog.michalski.pro/wp-json/wp/v2/";

// Fetch posts with embedded media
const getPosts = async () => {
  const response = await fetch(`${appUrl}posts?_embed`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const posts = await response.json();

  // Log each post to verify if the embedded media is available
  console.log(posts);

  return posts.map(post => ({
    ...post,
    featured_media_url: post._embedded?.['wp:featuredmedia']
      ? post._embedded['wp:featuredmedia'][0].source_url  // Get the image URL
      : null
  }));
};

// Fetch categories by IDs
const getCategories = async (categoryIds) => {
  const response = await fetch(`${appUrl}categories?include=${categoryIds.join(',')}`);
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }
  const categories = await response.json();

  console.log(categories); // Log the categories to verify data
  return categories; // Return the category data
};

export { appUrl, getPosts, getCategories };
