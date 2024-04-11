import { Link } from '@tanstack/react-router';
import PostTag from './post.tag.component';

export type Data = {
  data: {
    body: string;
    id: number;
    reactions: number;
    tags: string[];
    title: string;
    userId: number;
  };
};

const SinglePost = ({ data }: Data) => {
  return (
    <Link to={`/posts/$postId`} params={{ postId: data?.id.toString() }}>
      <div className="flex h-52 max-w-screen-xl flex-col justify-center gap-2 rounded-md bg-gray-900 p-4">
        <h1 className="border-b font-bold text-white">{data?.title}</h1>
        <span className="text-white">{data?.body}</span>
        <div className="flex items-center gap-4">
          {data?.tags?.map((tag, index) => {
            return <PostTag key={index} tagName={tag.toUpperCase()} />;
          })}
        </div>
      </div>
    </Link>
  );
};

export default SinglePost;
