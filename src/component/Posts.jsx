import { usePost } from "../hooks/supabase/usePost";
import { useGetAllPosts } from "../hooks/supabase/useGetAllPosts";

function Posts() {
  const { posts } = useGetAllPosts();
  const { data } = usePost();

  return (
    <>
      <h1>ポスト一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.name}>{post.name}</li>
        ))}
        {data}
      </ul>
    </>
  );
}

export default Posts;
