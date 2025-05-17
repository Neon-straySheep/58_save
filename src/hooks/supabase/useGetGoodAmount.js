// import React, { useEffect, useState } from 'react'
import { supabase } from "../../supabaseClient";

export const useGetGoodAmount = () => {
  async function getGoodAmount(postId) {
    const { data } = await supabase.from("good").select("*").eq("id", postId);
    console.log("success: ", data.length);
    return data.length;
  }

  return getGoodAmount;
};
