import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import { shuffleArray } from "../../unil/shffle";

export const useGetAllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await getAllPosts();
    }
    fetchData();
  }, []);

  async function getAllPosts() {
    const { data } = await supabase
      .from("posts")
      .select()
      .order("id", { ascending: false });
    const shaffledData = shuffleArray(data);
    setPosts(shaffledData);
    console.log(data);
  }

  return posts;
};
