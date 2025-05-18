import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { UserAuth } from "../../context/AuthContext";

export const useGetMyPosts = () => {
  const [myPosts, setPosts] = useState([]);
  const { session } = UserAuth();

  useEffect(() => {
    async function fetchData() {
      if (session && session.user) {
        await getMyPosts();
      } else {
        console.warn("Session or user is undefined");
      }
    }
    fetchData();
  }, [session]);

  async function getMyPosts() {
    try {
      const { data } = await supabase
        .from("posts")
        .select("*")
        .eq("user_id", session.user.id)
        .order("id", { ascending: false });
      setPosts(data);
      console.log("myposts", data);
      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  return myPosts;
};
