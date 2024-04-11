import { createFileRoute } from '@tanstack/react-router';
import { getAllPosts } from '../../helper/getAllPosts/getAllPosts';
import Post from '../../components/post.component';

export const Route = createFileRoute('/posts/')({
  loader: async () => await getAllPosts(),
  component: () => <Posts />,
});

const Posts = () => {
  const posts = Route.useLoaderData();
  console.log(posts, 'POSTS');

  return (
    <div className="flex flex-col gap-10">
      {posts?.posts?.map((item, index) => {
        return <Post key={index} data={item} />;
      })}
    </div>
  );
};
