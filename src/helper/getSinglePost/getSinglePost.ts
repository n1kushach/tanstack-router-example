export const getSinglePost = async (id:number|string) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/${id}`);
    const posts = await response.json();
    return posts;
  }