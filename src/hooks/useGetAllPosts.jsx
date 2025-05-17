import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export const useGetAllPosts = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
      getAllPosts();
    }, []);
  
    async function getAllPosts() {
      const { data } = await supabase.from("posts").select();
      setPosts(data);
      console.log("data"+ data);
    }

    return {
      posts
    }
}