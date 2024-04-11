/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute } from '@tanstack/react-router';
import { getAllPosts } from '../../helper/getAllPosts/getAllPosts';
import Post from '../../components/post.component';

export const Route = createFileRoute('/posts/')({
  loader: async () => await getAllPosts(),
  component: () => <Posts />,
});

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

const Posts = () => {
  const posts = Route.useLoaderData();

  return (
    <>
      <div className="flex flex-col gap-10 py-8">
        {posts?.posts?.map((item: any, index: number) => {
          return <Post key={index} data={item} />;
        })}
      </div>
    </>
  );
};
