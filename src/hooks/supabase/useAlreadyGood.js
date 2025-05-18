import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { supabase } from "../../supabaseClient";

export const useAlreadyGood = (postId) => {
  const { session } = UserAuth();
  const [isGood, setIsGood] = useState(false); // デフォルト値をfalseに設定
  const [loading, setLoading] = useState(true); // ローディング状態を管理

  useEffect(() => {
    if (!postId || !session) return; // postIdまたはsessionがない場合は処理をスキップ

    async function fetchData() {
      setLoading(true);
      const result = await isAlreadyGood(postId);
      setIsGood(result);
      setLoading(false);
    }

    fetchData();
  }, [postId, session]); // postIdまたはsessionが変わったときに再実行

  async function isAlreadyGood(postId) {
    try {
      const { data, error } = await supabase
        .from("good")
        .select("*")
        .eq("user_id", session.user.id)
        .eq("id", postId);

      if (error) {
        console.error("Error fetching posts:", error);
        return false; // エラーが発生した場合はfalseを返す
      }

      return data && data.length > 0; // データが存在すればtrue、なければfalse
    } catch (error) {
      console.error("Unexpected error:", error);
      return false; // 予期しないエラーが発生した場合もfalseを返す
    }
  }

  return { isGood, loading }; // 結果とローディング状態を返す
};