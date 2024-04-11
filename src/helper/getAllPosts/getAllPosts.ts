export const getAllPosts = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  const posts = await response.json();
  return posts;
}