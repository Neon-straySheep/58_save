import React from 'react';
import { Header } from './Header';
import { useUser } from './provider/UserContext';
import { usePosts } from './provider/PostContext';

export function Recent() {
  // タグ：home, 役割：他の人のポストを表示
  // この辺がAPIリクエストに置き換わる
    // const myId = "hogehoge"
    const {myId} = useUser()
    const {posts} = usePosts()
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
              className="inline-block bg-white shadow-md rounded-full px-6 py-3 text-gray-800 max-w-full mx-32"
              style={{ maxWidth: '80%', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
            >
              {post.content}
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
