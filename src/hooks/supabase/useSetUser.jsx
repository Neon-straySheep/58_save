import { supabase } from "../../supabaseClient";
import { UserAuth } from "../../context/AuthContext";

export const useSetUser = () => {
  const { session } = UserAuth();

  async function setUser() {
    console.log("setUser");
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", session.user.id)
      .maybeSingle();

    if (error) {
      console.error("エラー:", error.message);
    } else if (data) {
      console.log("ユーザーが存在します:", data.user_id);
    } else {
      const { data, error } = await supabase.from("users").insert({
        user_id: session.user.id,
        name: "normal",
      });
      if (error) {
        console.error(error);
      } else {
        console.log("User set successfully", data);
      }
    }
  }

  return {
    setUser,
  };
};
