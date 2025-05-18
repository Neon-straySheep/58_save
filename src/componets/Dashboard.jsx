import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Posts from "../component/PostList";
import Post from "../component/Post";
import { useSetUser } from "../hooks/supabase/useSetUser";
import App from "./App";

const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();
  const {setUser} = useSetUser();
  
  useEffect(() => {
    if(session){
      console.log("session", session);
      setUser();
    }
  },[])

  console.log(session);

  const handleSignOut = async (e) => {
    try {
      await signOut();
      navigate("/signin");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <App/>
      {/* <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <Posts/>
      <Post />  投稿入力欄（仮） */}
      <div>
        <p
          onClick={handleSignOut}
          className="hover:cursor-pointer border inline-block px-4 py-3 mt-4"
        >
          Sign out
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
