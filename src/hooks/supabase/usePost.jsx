// import React, { useEffect, useState } from 'react'
import { UserAuth } from "../../context/AuthContext";
import { supabase } from "../../supabaseClient";

export const usePost = () => {
    const {session} = UserAuth();
  
    async function post(content) {
      const date = new Date();
      const { data, error } = await supabase.from("posts").insert({
        user_id: session.user.id,
        content: content,
        dateTime: date.toLocaleString(),
      });
      if(error) {
        console.error(error);
      }
      if(data) {
        console.log("success: ",data);
      }
    }

    return {
      post,
    }
}
