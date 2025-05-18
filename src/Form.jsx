import React, { useEffect, useState } from 'react';
import { usePosts } from './provider/PostContext';
import { GoodProvider } from './provider/Good.jsx';
import { useNavigate } from 'react-router';
import { Header } from './Header';

export function Form() {
  const [content, setContent] = useState('');
  const {addPost} = usePosts()
  const navigate = useNavigate();

  const [butsuzoBg, setButsuzoBg] = useState("-1")

  // いいねの合計が入る変数
  const [allLike, setAllLike] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(content)
    navigate("/mypost")
    // alert(`送信された内容: ${content}`);
  };

  // 初回の合計いいね数取得
    useEffect(() => {
      // TODO: 実際はAPIで取得
      setAllLike(11)
      console.log("likeを取得")
    }, [])
  
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
    <div className="relative min-h-screen">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 -z-10 bg-center"
        style={{ backgroundImage: `url(${butsuzoBg})` }}
      />
      <div className="fixed left-1/2 transform -translate-x-1/2 top-4">
        <Header />
      </div>

      {/* フォームコンテンツ */}
      <div className="max-w-3xl  mx-auto py-20 px-6 ">
        <div className="text-4xl font-bold text-center mb-8 text-white">
          
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <div>
            <label
              htmlFor="content"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
            </label>
            <textarea
              id="content"
              name="content"
              rows="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="さあ、お前の善行を数えろ！"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-black font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
