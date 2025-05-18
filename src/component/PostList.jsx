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
  const posts = useGetAllPosts(true);  //全ての投稿をとってくる。シャッフルするならtrue, 最新の順ならfalse
  const myPosts = useGetMyPosts();  //自分の投稿をとってくる
  const { good } = useGoodPost();  // 善行をつける関数
  const goodTotal = useGetGoodToatal();  // 善行のトータルをとってくる
  const goodAmounts = useGetGoodAmount(myPosts);  // 自分の投稿の善行の数をとってくる
  const { katsu } = useKatsuPost();  // 喝をつける関数
  const katsuTotal = useGetKatsuToatal();  // 喝のトータルをとってくる
  const katsuAmounts = useGetKatsuAmount(myPosts);  // 自分の投稿の喝の数をとってくる

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
