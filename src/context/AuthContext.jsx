import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);
  console.log("session--------: ", session);
  // console.log("session: ", sessi
  // Sign up
  const signUpNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error("there was a problem signing up: ", error);
      return { success: false, error };
    }
    setSession(data.session);
    console.log("sign up success: ", data);
    return { success: true, data };
  };

  // Sign in
  const signInUser = async ( email, password ) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        console.error("sign in error occured: ", error);
        return { success: false, error: error.message };
      }
      setSession(data.session);
      console.log("sign-in success: ", data);
      return { success: true, data };
    } catch (error) {
      console.error("an error occured: ", error);
    }
  };

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     console.log("session: ", session);
      
  //     setSession(session);
  //   });

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     console.log("onAuthStateChange: ", session);
  //     setSession(session);
  //   });
  // }, [session]);

  // Sign out
  const signOut = () => {
    const { error } = supabase.auth.signOut();
    if (error) {
      console.error("there was an error: ", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ session, signUpNewUser, signInUser, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};

