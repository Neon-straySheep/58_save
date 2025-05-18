import React, { createContext, useContext, useState } from 'react';
import { useUser } from './UserContext';

const GoodContext = createContext();

export const GoodProvider = ({ children }) => {

  const {myId} = useUser()

  const [good,setGood] = useState([
    {id:"1",userId:"hogehoge"},
    {id:"1",userId:"hogehoge2"},
    {id:"2",userId:"hogehoge3"},
    {id:"3",userId:"hogehoge4"},
    {id:"4",userId:"hogehoge5"}
])

  const addGood = (postId,myId) => {
    const newGood = {
      id: postId,
      userId: myId,
    };
    setPosts((prevGood) => [...prevGoods, newGood]);
  };

  return (
    <GoodContext.Provider value={{ good,addGood }}>
      {children}
    </GoodContext.Provider>
  );
};

export const useGoods = () => useContext(GoodContext);