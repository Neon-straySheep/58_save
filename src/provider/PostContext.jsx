import React, { createContext, useContext, useState } from 'react';
import { useUser } from './UserContext';
import { usePost } from '../hooks/supabase/usePost';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const { post } = usePost();
  const [posts] = useState([
    { id: 1, userId: 'hogehoge', content: 'これは短いテキストです。', date: '2025-05-16', time: '22:58:58.024' },
    { id: 2, userId: 'hogehoge', content: 'これは少し長めのテキストで、何行かに分かれる可能性があります。', date: '2025-05-16', time: '22:58:58.024' },
    { id: 3, userId: 'hogehoge', content: 'もっともっと長いテキストがここにあります。これにはさらに多くの情報が含まれており、スクロールできるようにしておく必要があります。', date: '2025-05-16', time: '22:58:58.024' },
    { id: 4, userId: 'hogehoge', content: '短い文。', date: '2025-05-16', time: '22:58:58.024' },
    { id: 5, userId: 'hogehoge', content: 'さらに別の長文です。Tailwind CSS の便利なクラスで高さが自動的に調整され、間隔もいい感じに設定できます。', date: '2025-05-16', time: '22:58:58.024' },
    { id: 6, userId: 'fugafuga', content: '徳なんて積んでられっかよ！', date: '2025-05-16', time: '22:58:58.024' },
  ]);
  const {myId} = useUser()

  const addPost = (content) => {
    post(content);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
