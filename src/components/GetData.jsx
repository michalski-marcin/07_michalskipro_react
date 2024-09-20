const appUrl = "http://blog.michalski.pro/wp-json/wp/v2/";
const getPosts = async () => {
  const response = await fetch(`${appUrl}posts/`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return await response.json();  // Return the parsed JSON data
};

export { appUrl, getPosts };
