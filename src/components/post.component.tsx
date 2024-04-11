import React from 'react';

type Data = {
  data: {
    body: string;
    id: number;
    reactions: number;
    tags: string[];
    title: string;
    userId: number;
  };
};

const Post = ({ data }: Data) => {
  return (
    <div className="h-52 max-w-screen-xl rounded-md bg-gray-900 p-4">
      <h1 className="font-bold text-white">{data?.title}</h1>
      <span className="text-white">{data?.body}</span>
    </div>
  );
};

export default Post;
