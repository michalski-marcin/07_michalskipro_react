const appUrl = "http://blog.michalski.pro/wp-json/wp/v2/";
const getPosts = async () => {
  const response = await fetch(`${appUrl}posts?_embed`);  // Fetch posts with embedded media
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
export { appUrl, getPosts };
