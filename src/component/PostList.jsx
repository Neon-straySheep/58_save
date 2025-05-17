import { useEffect } from "react";
import { useGetAllPosts } from "../hooks/supabase/useGetAllPosts";
import { useGetMyPosts } from "../hooks/supabase/useGetMyPosts";

function PostList() {
  const { posts , getAllPosts} = useGetAllPosts();
  const { myPosts, getMyPosts} = useGetMyPosts();

  useEffect(() => {
    getAllPosts();
    getMyPosts();
  }, []);

  return (
    <>
      <h1>ポスト一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
      <h1>マイポスト一覧</h1>
      <ul>
        {myPosts && (myPosts.map((post) => (
          <li key={post.id}>{post.content}</li>
        )))}
      </ul>
    </>
  );
}

export default PostList;
