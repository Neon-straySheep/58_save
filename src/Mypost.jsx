import React from 'react';
import { useUser } from './provider/UserContext';
import { usePosts } from './provider/PostContext';
import { Link } from 'react-router';
import { Header } from './Header';

export function Mypost() {

  // この辺がAPIリクエストに置き換わる
  // const myId = "hogehoge"
  const {myId} = useUser()
  const {posts} = usePosts()
  // ーーーーーーーーーーー

  console.log(myId)
  const onlyMyPosts = posts.filter(post => myId === post.userId)
  return (
    <div className="relative min-h-screen">
      {/* 背景画像 */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/homeHotoke.png')" }}
      />

      {/* コンテンツ */}
      <div className="max-w-3xl mx-auto py-20 px-6 text-brack p-4">
        <Header />
        {/* <div className="text-4xl font-bold m-8">固定背景とスクロール可能な内容</div> */}
        <div className="text-4xl font-bold m-8">固定背景とスクロール可能な内容</div>
        <div className="h-full overflow-y-scroll space-y-4">
          {onlyMyPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 text-gray-800"
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
