import React, { useState } from "react";
import { usePost } from "../hooks/supabase/usePost";

const Post = () => {
  const [content, setContent] = useState("");

  const { post } = usePost();

  return (
    <>
      <input
        type="text"
        placeholder="テキストを入力"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={() => {
          post(content);
          setContent("");
        }}
      >
        ポスト
      </button>
    </>
  );
};

export default Post;
