import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import { UserAuth } from "../../context/AuthContext";

export const useGetMyPosts = () => {
  const [posts, setPosts] = useState([]);
   const {session} = UserAuth();

  async function getMyPosts() {
    const { data } = await supabase.from("posts").select(session.user.id);
    setPosts(data);
    console.log(data);
  }

  return {
    posts,
    getMyPosts,
  };
};
