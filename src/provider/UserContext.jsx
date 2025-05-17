
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // この辺がAPIリクエストに置き換わる
  // const myId = "hogehoge"
  const userAgent = navigator.userAgent.toLowerCase();
  const isChrome = /chrome/i.test(userAgent) && !/edge/i.test(userAgent);
  const myId = isChrome ? "hogehoge" : "fugafuga"
  // ーーーーーーーーーーー

  return (
    <UserContext.Provider value={{ myId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
