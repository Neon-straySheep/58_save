// import { useEffect } from "react";
import { useGetAllPosts } from "../hooks/supabase/useGetAllPosts";
import { useGetMyPosts } from "../hooks/supabase/useGetMyPosts";
import { useGoodPost } from "../hooks/supabase/useGoodPost";
import { useGetGoodAmount } from "../hooks/supabase/useGetGoodAmount";
import { useGetGoodToatal } from "../hooks/supabase/useGetGoodToatal";
import { useKatsuPost } from "../hooks/supabase/useKatsuPost";
import { useGetKatsuToatal } from "../hooks/supabase/useGetKatsuToatal";
import { useGetKatsuAmount } from "../hooks/supabase/useGetKatsuAmount";

function PostList() {
  const posts = useGetAllPosts(true);  //シャッフルするならtrue, 最新の順ならfalse
  const myPosts = useGetMyPosts();
  const { good } = useGoodPost();
  const goodTotal = useGetGoodToatal();
  const goodAmounts = useGetGoodAmount(myPosts);
  const { katsu } = useKatsuPost();
  const katsuTotal = useGetKatsuToatal();
  const katsuAmounts = useGetKatsuAmount(myPosts);

  return (
    <>
      <h1>ポスト一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}  <button onClick={() => good(post.id)}>善行</button>  <button onClick={() => katsu(post.id)}>喝！</button></li>
        ))}
      </ul>
      <h1>マイポスト一覧</h1>
      <h2>善トータル {goodTotal}</h2>
      <h2>喝トータル {katsuTotal}</h2>
      <ul>
        {myPosts ? (myPosts.map((post) => (
          <li key={post.id}>{post.content}, 善行：{goodAmounts[post.id]}, 喝！：{katsuAmounts[post.id]}</li>
        ))):<></> }
      </ul>
    </>
  );
}

export default PostList;
