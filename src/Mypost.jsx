import React, { useEffect, useState } from 'react';
import { useUser } from './provider/UserContext';

import { GoodProvider } from './provider/Good.jsx';
import { Link } from 'react-router'
import { Header } from './Header';
import { useGetMyPosts } from './hooks/supabase/useGetMyPosts.jsx';
import { useGetGoodToatal } from './hooks/supabase/useGetGoodToatal.jsx';
import { useGetGoodAmount } from './hooks/supabase/useGetGoodAmount.js';
import { useGetKatsuAmount } from './hooks/supabase/useGetKatsuAmount.js';

export function Mypost() {
  const myPosts = useGetMyPosts();
  // タグ：Mypost, 役割；マイページ
  // この辺がAPIリクエストに置き換わる
  // const myId = "hogehoge"
  const {myId} = useUser()
  // const {posts} = usePosts()
  // ーーーーーーーーーーー
  const [butsuzoBg, setButsuzoBg] = useState("-1")

  // いいねの合計が入る変数
  const [allLike, setAllLike] = useState(0)

    const goodAmounts = useGetGoodAmount(myPosts);  // 自分の投稿の善行の数をとってくる
    const katsuAmounts = useGetKatsuAmount(myPosts);  // 自分の投稿の喝の数をとってくる
  


  // console.log(myId)
  // const onlyMyPosts = posts.filter(post => myId === post.userId)

  // 初回の合計いいね数取得
  // useEffect(() => {
  //   // TODO: 実際はAPIで取得
  //   setAllLike(7)
  //   console.log("likeを取得")
  // }, [])
  const goodTotal = useGetGoodToatal(); 
  useEffect(() => {
    setAllLike(goodTotal)
    console.log("likeを取得", goodTotal)
  }, [goodTotal])

  // allLikeの値が変わったときに背景を変更する
  useEffect(() => {
    if (allLike <= 5) {
      setButsuzoBg("/firstButsuzoNext.png")
    } else if (allLike <= 10) {
      setButsuzoBg("/secondButsuzoNext.png")
    } else if (allLike <= 15) {
      setButsuzoBg("/thirdButsuzoNext.png")
    }

    console.log(butsuzoBg)
  }, [allLike])

  return (
    <div className="relative min-h-screen bg-blue-100 z-0">
      {/* 背景画像 */}
      <div
        className="fixed inset-0 -z-10"
        style={{ backgroundImage: `url(${butsuzoBg})` }}
      />
      <div className="fixed left-1/2 transform -translate-x-1/2 top-4 z-10">
        <Header />
      </div>

      {/* コンテンツ */}
      <div className="max-w-3xl mx-auto py-20 px-6 text-brack p-4">
        {/* <div className="text-4xl font-bold m-8">固定背景とスクロール可能な内容</div> */}
        {/* <div className="text-4xl font-bold m-8">固定背景とスクロール可能な内容</div> */}
        <div className="h-full overflow-y-scroll space-y-4">
          {myPosts.map((post, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-8 bg-white shadow-md rounded-md p-4 text-gray-800"
            >
              <p>
              {post.content}
              </p>
              <div>
                <p>善行：{goodAmounts[post.id]}</p>
                <p>喝！：{katsuAmounts[post.id]}</p>
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
