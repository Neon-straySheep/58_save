import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useSetUser } from "../hooks/supabase/useSetUser";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signUpNewUser } = UserAuth();
  const navigate = useNavigate();
  console.log(session);
  const {setUser} = useSetUser();

  // if (session) {
  //   setUser();
  //   navigate("/dashboard");
  // }

  const handleSiginUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signUpNewUser(email, password);

      if (result.success) {
        // setUser();
        navigate("/dashboard");   
      }
    } catch (err) {
      setError("an error occured");
      console.error("an error occured: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSiginUp} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">新規登録</h2>
        <p>
          アカウントを既に持っていますか？ <Link to="/signin">サインイン</Link>
        </p>
        <div className="flex flex-col py-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 mt-6"
            type="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-3 mt-6"
            type="password"
          />
          <button type="submit" disabled={loading} className="mt-6 w-full">
            Sign up
          </button>
          {email && <p className="text-red-600 text-center pt-4">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Signup;
