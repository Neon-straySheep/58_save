import React from "react";
import { supabase } from "../../supabaseClient";
import { UserAuth } from "../../context/AuthContext";

export const useGoodPost = () => {
  const { session } = UserAuth();

  async function good(postId) {
    const { data, error } = await supabase.from("good").insert({
      id: postId,
      user_id: session.user.id,
    });
    if (error) {
      console.error(error);
    }
    if (data) {
      console.log("success: ", data);
    }
  }

  return {
    good,
  };
};
