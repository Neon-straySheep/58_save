import React, { useEffect, useState } from 'react'
import { supabase } from "../../supabaseClient";

export const usePost = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      post();
    }, []);
  
    async function post() {
      const date = new Date();
      const { data, error } = await supabase.from("posts").insert({
        user_id: 123,
        content: "",
        date: date.toLocaleDateString(),
        time: date.toLocaleTimeString(),
        good: 0,
        katsu: 0, 
      });
      setData(data);
      if(error) {
        console.error(error);
      }
    }

    return {
      data, error
    }
}
