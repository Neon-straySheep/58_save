// import { useEffect } from "react";
import { useGetAllPosts } from "../hooks/supabase/useGetAllPosts";
import { useGetMyPosts } from "../hooks/supabase/useGetMyPosts";
import { useGoodPost } from "../hooks/supabase/useGoodPost";
import { useGetGoodAmount } from "../hooks/supabase/useGetGoodAmount";

function PostList() {
  const posts = useGetAllPosts();
  const myPosts = useGetMyPosts();
  const { good } = useGoodPost();
  const getGoodAmount = useGetGoodAmount();
  
  return (
    <>
      <h1>ポスト一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}  <button onClick={() => good(post.id)}>善行</button></li>
        ))}
      </ul>
      <h1>マイポスト一覧</h1>
      <ul>
        {myPosts ? (myPosts.map((post) => (
          <li key={post.id}>{post.content}  </li>
        ))):<></> }
      </ul>
    </>
  );
}

export default PostList;
