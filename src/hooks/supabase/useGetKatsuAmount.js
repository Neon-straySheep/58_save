// import React, { useEffect, useState } from 'react'
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export const useGetKatsuAmount = (myPosts) => {
  const [katsuAmounts, setKatsuAmounts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      for (const post of myPosts) {
        const amount = await getKatsuAmount(post.id);
        setKatsuAmounts((prev) => ({
          ...prev,
          [post.id]: amount,
        }));
      }
    }
    fetchData();
  }, [myPosts]);

  async function getKatsuAmount(postId) {
    const { data } = await supabase.from("katsu").select("*").eq("id", postId);
    console.log(postId, data.length);
    return data.length;
  }

  return katsuAmounts ;
};
