import { useState } from 'react';
import { usePosts } from './provider/PostContext';
import { useNavigate } from 'react-router';
import { Header } from './Header';

export function Form() {
  const [content, setContent] = useState('');
  const {addPost} = usePosts()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(content)
    navigate("/mypost")
    // alert(`送信された内容: ${content}`);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />
      {/* 背景画像 */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/homeHotoke.png')" }}
      />

      {/* フォームコンテンツ */}
      <div className="max-w-3xl mx-auto py-20 px-6">
        <div className="text-4xl font-bold text-center mb-8 text-white">
          フォームタイトル
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
              内容
            </label>
            <textarea
              id="content"
              name="content"
              rows="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ここに内容を入力してください"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
