const PostTag = ({ tagName }: { tagName: string }) => {
  return (
    <button className="cursor-pointer rounded-md bg-blue-600 p-2 text-white duration-300 hover:bg-blue-800">
      {tagName}
    </button>
  );
};

export default PostTag;
