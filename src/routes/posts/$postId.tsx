/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute } from '@tanstack/react-router';
import { getSinglePost } from '../../helper/getSinglePost/getSinglePost';
import PostTag from '../../components/post.tag.component';

export const Route = createFileRoute('/posts/$postId')({
  component: () => <SinglePost />,
  loader: async ({ params }) => await getSinglePost(params.postId),
});

export const SinglePost = () => {
  const singlePost = Route.useLoaderData();
  return (
    <div className="mt-4 flex h-96 max-w-screen-xl flex-col justify-between gap-2 rounded-md bg-gray-900 p-4">
      <h1 className="border-b font-bold text-white">{singlePost?.title}</h1>
      <span className="text-white">{singlePost?.body}</span>
      <div className="flex items-center gap-4">
        {singlePost?.tags?.map((tag: any, index: any) => {
          return <PostTag key={index} tagName={tag.toUpperCase()} />;
        })}
      </div>
    </div>
  );
};
