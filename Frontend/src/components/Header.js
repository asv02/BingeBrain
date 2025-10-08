import React from "react";
import { signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser, removeUser } from "../utils/appSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((store) => store?.userReducer?.displayName);
  console.log("userName->", userName);
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Error in Logout");
        return;
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Auth changed api get called....");
        dispatch(
          setUser({
            uid: user?.uid,
            email: user?.email,
            displayName: user?.displayName,
          })
        );
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <img src="/logo.svg" alt="bingeBrain"></img>
      Header
      <button onClick={handleClick}>SignOut</button>
    </div>
  );
};

export default Header;
