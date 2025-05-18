import React from "react";
import { supabase } from "../../supabaseClient";
import { UserAuth } from "../../context/AuthContext";

export const useKatsuPost = () => {
    const { session } = UserAuth();

  async function katsu(postId) {
    const { data, error } = await supabase.from("katsu").insert({
      id:  postId,
      user_id: session.user.id,
    });
    if (error) {
      console.error(error);
    }
    if (data) {
      console.log("success: ", data);
    }
  }

  return{
    katsu,
  }
};
