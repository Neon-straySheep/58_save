import { useGetAllPosts } from "../hooks/useGetAllPosts";

function Posts() {
  const { posts } = useGetAllPosts();

  return (
    <>
      <h1>ポスト一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.name}>{post.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Posts;
