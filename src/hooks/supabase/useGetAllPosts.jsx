import { useState } from "react";
import { supabase } from "../../supabaseClient";

export const useGetAllPosts = () => {
    const [posts, setPosts] = useState([]);
  
    async function getAllPosts() {
      const { data } = await supabase.from("posts").select();
      setPosts(data);
      console.log(data)
    }

    return {
      posts, getAllPosts
    }
}