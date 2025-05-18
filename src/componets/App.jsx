import React from "react";
import { Header } from "../Header";
import { useUser } from "../provider/UserContext";
import { useGetAllPosts } from "../hooks/supabase/useGetAllPosts";
import { useGoodPost } from "../hooks/supabase/useGoodPost";
import { useKatsuPost } from "../hooks/supabase/useKatsuPost";

export default function App() {
  const posts = useGetAllPosts(true);
  const { good } = useGoodPost(); // 善行をつける関数
  const { katsu } = useKatsuPost(); // 喝をつける関数
  // タグ：home, 役割：他の人のポストを表示
  // この辺がAPIリクエストに置き換わる
  // const myId = "hogehoge"
  const { myId } = useUser();
  // const {posts} = usePosts()
  // ーーーーーーーーーーー

  return (
    <div className="relative min-h-screen">
      {/* 背景画像 */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/homeButsuzo.jpg')" }}
      />
      <div className="fixed left-1/2 transform -translate-x-1/2 top-4">
        <Header />
      </div>

      {/* コンテンツ */}
      <div className=" mx-auto py-20 px-6 text-brack">
        {/* <div className="text-4xl font-bold m-8">固定背景とスクロール可能な内容</div> */}
        <div className="h-full overflow-y-scroll space-y-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white shadow-md rounded-full px-8 py-3 text-gray-800 max-w-full mx-32"
              style={{
                maxWidth: "80%",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              <p>{post.content}</p>
              <div className="flex gap-2">
                <button onClick={() => good(post.id)}>善</button>
                <button onClick={() => katsu(post.id)}>喝！</button>
              </div>
            </div>
          ))}
        </div>
        {/* {[...Array(30)].map((_, i) => (
          <p key={i} className="mb-4">
            スクロールテキスト #{i + 1}
          </p>
        ))} */}
      </div>
    </div>
  );
}
