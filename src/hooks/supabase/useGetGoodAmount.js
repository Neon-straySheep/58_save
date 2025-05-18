// import React, { useEffect, useState } from 'react'
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export const useGetGoodAmount = (myPosts) => {
  const [goodAmounts, setGoodAmounts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      for (const post of myPosts) {
        const amount = await getGoodAmount(post.id);
        setGoodAmounts((prev) => ({
          ...prev,
          [post.id]: amount,
        }));
      }
    }
    fetchData();
  }, [myPosts]);

  async function getGoodAmount(postId) {
    const { data } = await supabase.from("good").select("*").eq("id", postId);
    console.log(postId, data.length);
    return data.length;
  }

  return goodAmounts ;
};
