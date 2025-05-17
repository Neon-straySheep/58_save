import { useEffect } from "react";
import { useGetAllPosts } from "../hooks/supabase/useGetAllPosts";

function PostList() {
  const { posts , getAllPosts} = useGetAllPosts();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <h1>ポスト一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}><p>名前<br></br>{post.content}</p></li>
        ))}
      </ul>
      
    </>
  );
}

export default PostList;
