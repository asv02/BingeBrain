import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import React, { useEffect } from "react";
import Browse from "./Browse";
import auth from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../utils/appSlice";
import { useNavigate } from "react-router";
import Header from "./Header";

const Home = () => {
  const [view, setView] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Auth changed api get called....')
        dispatch(setUser({ uid: user?.uid, email: user?.email, displayName: user?.displayName }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <Header />
      {view ? (
        <Login view={view} setView={setView} />
      ) : (
        <SignUp view={view} setView={setView} />
      )}
    </div>
  );
};

export default Home;
